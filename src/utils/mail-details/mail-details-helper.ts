import {getInbox} from '../inbox/inbox';
import {getMailDetails} from './mail-details';

export async function getLinkOfFirstMail(mailAddress: string) {
  const result: any[] = [];
  const mails = await getInbox(mailAddress);
  const idOfFirstMail = mails[0].id;
  const mailDetail = await getMailDetails(idOfFirstMail, mailAddress);
  const res1 = mailDetail.body.match(/https?:\/\/\S+/);
  const res2 = mailDetail.body.match(/http?:\/\/\S+/);
  result.push(res1, res2);

  return result;
}
