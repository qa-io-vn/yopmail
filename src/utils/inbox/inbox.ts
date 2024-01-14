import {getYp} from '../permission/yp';
import {getYj} from '../permission/yj';
import {getVersion} from '../permission/version';
import axios from 'axios';
import {createGetMailCookies} from '../permission/cookies';
import {getInboxUrl} from '../baseUrl';
import {parse} from 'node-html-parser';

async function getInboxHtml( mailAddress: string) {
  const yp = await getYp();
  const yj = await getYj();
  const ver = await getVersion();

  const response = await axios({
    headers: {Cookie: await createGetMailCookies()},
    method: 'get',
    url: getInboxUrl(mailAddress, yp, yj, ver),
  });

  return response.data;
}

export async function getInbox(mailAddress: string) {
  mailAddress=(mailAddress.split('@')[0]||'').toLowerCase()||mailAddress;
  const htmlPage = await getInboxHtml(mailAddress);
  const data = parse(htmlPage);
  const mails = data.querySelectorAll('.m');
  const mailsInfo: any[] = [];
  mails?.forEach(
      (mail)=> {
        const id = mail.getAttribute('id');
        const title = mail.querySelector('.lmf')?.textContent;
        const summary = mail.querySelector('.lms')?.textContent;
        const time = mail.querySelector('.lmh')?.textContent;
        const mailInfo: any = {};
        mailInfo.id = id;
        mailInfo.title = title;
        mailInfo.summary = summary;
        mailInfo.time = time;

        mailsInfo.push(mailInfo);
      },
  );

  return mailsInfo;
}
