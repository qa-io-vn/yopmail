import {parse} from 'node-html-parser';
import axios from 'axios';
import {getMailDetailsUrl} from '../baseUrl';
import {createGetMailCookies} from '../permission/cookies';
export async function getMailDetailsHtml(id: string, mailAddress: string) {
  mailAddress=(mailAddress.split('@')[0]||'').toLowerCase()||mailAddress;
  const cookies = await createGetMailCookies();
  const response = await axios({
    headers: {
      Cookie: cookies + `; compte=${mailAddress}; ywm=${mailAddress}`,
      Host: 'yopmail.com',
    },
    method: 'get',
    url: getMailDetailsUrl(id, mailAddress),
  });

  return response.data;
}

export async function getMailDetails(id: string, mailAddress: string) {
  mailAddress=(mailAddress.split('@')[0]||'').toLowerCase()||mailAddress;
  const html = await getMailDetailsHtml(id, mailAddress);
  const data = parse(html);
  const details: any = {};

  details.body = data.querySelector('#mail')?.textContent;

  return details;
}


