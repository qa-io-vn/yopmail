'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.getInboxUrl = exports.getMailDetailsUrl = void 0;
function getMailDetailsUrl(id, mailAddress) {
  return 'https://yopmail.com/mail?b='.concat(mailAddress, '&id=m').concat(id);
}
exports.getMailDetailsUrl = getMailDetailsUrl;
function getInboxUrl(mailAddress, yp, yj, ver) {
  return 'https://yopmail.com/inbox?login='.concat(mailAddress, '&p=1&d=&ctrl=&yp=').concat(yp, '&yj=').concat(yj, '&v=').concat(ver, '&r_c=&id=&ad=0');
}
exports.getInboxUrl = getInboxUrl;
