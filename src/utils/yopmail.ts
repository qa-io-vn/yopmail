import { parse } from 'node-html-parser'
import axios from "axios";


async function getCookie(){
  const response = await axios({
    method: 'get',
    url: 'https://yopmail.com'
  });
  if(response.headers['set-cookie']==undefined) return [];
  return response.headers['set-cookie'];
}
async function getYp(){
  const response = await axios({
    method: 'get',
    url: 'https://yopmail.com'
  });

  const data = parse(response.data);
  const result =  data.querySelector('#yp')?.getAttribute('value')

  return result+'';
}

async function getYj(){
  const version = await  getVersion();
  const url = `https://yopmail.com/ver/${version}/webmail.js`;
  const response = await axios({
    method: 'get',
    url: url
  });

  const match =  response.data.match(/&yj=([^&]+)&v=/);
  return match?match[1]:null
}

async function getVersion(){
  const response = await axios({
    method: 'get',
    url: 'https://yopmail.com'
  });

  return response.data.match(/\/ver\/(\d+\.\d+)\//)[1] + '';
}

async function createCookies(){
  const cookie = await  getCookie();
  const date = new Date();
  const yTime = date.getHours() + ':' + date.getMinutes();
  cookie?.push(`ytime=${yTime}`);
  return cookie?.toString();
}

export async function getInboxHtml( mailAddress: string){
  const yp = await getYp();
  const yj = await  getYj();

  const response = await axios({
    headers: { Cookie:  await createCookies()},
    method: 'get',
    url: `https://yopmail.com/inbox?login=${mailAddress}&p=1&d=&ctrl=&yp=${yp}&yj=${yj}&v=9.0&r_c=&id=&ad=0`,
  })

  return response.data
}

export async function getInbox(mailAddress: string){
  const htmlPage = await getInboxHtml(mailAddress);
  const data = parse(htmlPage);
  const mails = data.querySelectorAll('.m');
  const mailsInfo: any[] = [];
  mails?.forEach(
    mail=> {
        const id = mail.getAttribute('id');
        const title = mail.querySelector('.lmf')?.textContent;
        const summary = mail.querySelector('.lms')?.textContent;
        const time = mail.querySelector('.lmh')?.textContent;
        let mailInfo: any = {};
        mailInfo.id = id;
        mailInfo.title = title;
        mailInfo.summary = summary;
        mailInfo.time = time;

      mailsInfo.push(mailInfo);
     }
  )

  return mailsInfo;
}

export async function getMailDetailsHtml(id: string, mailAddress: string){
  const cookies = await createCookies();
  const response = await axios({
    headers: {
      Cookie:  cookies + `; compte=${mailAddress}; ywm=${mailAddress}`,
      Host: 'yopmail.com'
    },
    method: 'get',
    url: `https://yopmail.com/mail?b=admin01&id=m${id}`,
  })

  return response.data;
}

export async function getMailDetails(id: string, mailAddress: string){
  const html = await getMailDetailsHtml(id, mailAddress);
  const data = parse(html);
  let details: any = {};

  details.body = data.querySelector('#mail')?.textContent;

  return details;
}
