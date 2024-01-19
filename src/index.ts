import {getInbox} from './utils/inbox/inbox';
import {getMailDetails, getMailDetailsHtml} from './utils/mail-details/mail-details';
import {getLinkOfFirstMail} from './utils/mail-details/mail-details-helper';

export function inbox(mailAddress: string): Promise<any[]> {
  return getInbox(mailAddress);
}

export function mailDetails(mailId:string, mailAddress: string): Promise<any[]> {
  return getMailDetails(mailId, mailAddress);
}

export function mailDetailsHtml(mailId:string, mailAddress: string): Promise<any[]> {
  return getMailDetailsHtml(mailId, mailAddress);
}

export function linkOfFirstMail(mailAddress: string): Promise<any[]> {
  return getLinkOfFirstMail(mailAddress);
}
