import {getInbox} from './utils/inbox/inbox';
import {getMailDetails, getMailDetailsHtml} from './utils/mail-details/mail-details';
import {getLinkOfFirstMail} from './utils/mail-details/mail-details-helper';

export function inbox(mailAddress: string){
  return getInbox(mailAddress);
}

export function mailDetails(mailId: string,mailAddress: string){
  return getMailDetails(mailId,mailAddress);
}

export function mailDetailsHtml(mailId: string,mailAddress: string){
  return getMailDetailsHtml(mailId,mailAddress);
}

export function linkOfFirstMail(mailAddress: string){
  return getLinkOfFirstMail(mailAddress);
}

module.exports = {
  inbox:inbox,
  getMailDetails:getMailDetails,
  mailDetailsHtml:mailDetailsHtml,
  linkOfFirstMail:linkOfFirstMail
}
