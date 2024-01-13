import { parse } from 'node-html-parser'
import axios from "axios";
import { getMailDetailsUrl} from "../baseUrl";
import {createGetMailCookies} from "../permission/cookies";
export async function getMailDetailsHtml(id: string, mailAddress: string){
  const cookies = await createGetMailCookies();
  const response = await axios({
    headers: {
      // Cookie:  cookies + `; compte=${mailAddress}; ywm=${mailAddress}`,
      Cookie:  cookies + `; compte=${mailAddress}; ywm=${mailAddress}`,
      Host: 'yopmail.com'
    },
    method: 'get',
    url: getMailDetailsUrl(id),
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


