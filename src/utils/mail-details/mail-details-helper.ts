import {getInbox} from '../inbox/inbox';
import {getMailDetailsHtml} from './mail-details';
import {parse} from 'node-html-parser';

export async function getLinkOfFirstMail(mailAddress: string) {
  mailAddress=(mailAddress.split('@')[0]||'').toLowerCase()||mailAddress;
  const result: any[] = [];
  const mails = await getInbox(mailAddress);
  const idOfFirstMail = mails[0].id;
  const mailDetail = await getMailDetailsHtml(idOfFirstMail, mailAddress);
  const selectorAll = parse(mailDetail).querySelectorAll('a');

  selectorAll.forEach(
      (item) => {
        const href = item.getAttribute('href');
        if (href!=null) {
          result.push(href);
        }
      },
  );

  return result;
}
