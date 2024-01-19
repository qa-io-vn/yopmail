'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.linkOfFirstMail = exports.mailDetailsHtml = exports.mailDetails = exports.inbox = void 0;
const inbox_1 = require('./utils/inbox/inbox');
const mail_details_1 = require('./utils/mail-details/mail-details');
const mail_details_helper_1 = require('./utils/mail-details/mail-details-helper');
function inbox(mailAddress) {
  return (0, inbox_1.getInbox)(mailAddress);
}
exports.inbox = inbox;
function mailDetails(mailId, mailAddress) {
  return (0, mail_details_1.getMailDetails)(mailId, mailAddress);
}
exports.mailDetails = mailDetails;
function mailDetailsHtml(mailId, mailAddress) {
  return (0, mail_details_1.getMailDetailsHtml)(mailId, mailAddress);
}
exports.mailDetailsHtml = mailDetailsHtml;
function linkOfFirstMail(mailAddress) {
  return (0, mail_details_helper_1.getLinkOfFirstMail)(mailAddress);
}
exports.linkOfFirstMail = linkOfFirstMail;
