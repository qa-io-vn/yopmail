'use strict';
const __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
 result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const __generator = (this && this.__generator) || function(thisArg, body) {
  let _ = {label: 0, sent: function() {
    if (t[0] & 1) throw t[1]; return t[1];
  }, trys: [], ops: []}; let f; let y; let t; let g;
  return g = {'next': verb(0), 'throw': verb(1), 'return': verb(2)}, typeof Symbol === 'function' && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (g && (g = 0, op[0] && (_ = 0)), _) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0: case 1: t = op; break;
          case 4: _.label++; return {value: op[1], done: false};
          case 5: _.label++; y = op[1]; op = [0]; continue;
          case 7: op = _.ops.pop(); _.trys.pop(); continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0; continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1]; break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1]; t = op; break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2]; _.ops.push(op); break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e]; y = 0;
      } finally {
        f = t = 0;
      }
    }
    if (op[0] & 5) throw op[1]; return {value: op[0] ? op[1] : void 0, done: true};
  }
};
Object.defineProperty(exports, '__esModule', {value: true});
exports.getInbox = void 0;
const yp_1 = require('../permission/yp');
const yj_1 = require('../permission/yj');
const version_1 = require('../permission/version');
const axios_1 = require('axios');
const cookies_1 = require('../permission/cookies');
const baseUrl_1 = require('../baseUrl');
const node_html_parser_1 = require('node-html-parser');
function getInboxHtml(mailAddress) {
  return __awaiter(this, void 0, void 0, function() {
    let yp; let yj; let ver; let response; let _a;
    let _b; let _c;
    return __generator(this, function(_d) {
      switch (_d.label) {
        case 0: return [4 /* yield*/, (0, yp_1.getYp)()];
        case 1:
          yp = _d.sent();
          return [4 /* yield*/, (0, yj_1.getYj)()];
        case 2:
          yj = _d.sent();
          return [4 /* yield*/, (0, version_1.getVersion)()];
        case 3:
          ver = _d.sent();
          _a = axios_1.default;
          _b = {};
          _c = {};
          return [4 /* yield*/, (0, cookies_1.createGetMailCookies)()];
        case 4: return [4 /* yield*/, _a.apply(void 0, [(_b.headers = (_c.Cookie = _d.sent(), _c),
        _b.method = 'get',
        _b.url = (0, baseUrl_1.getInboxUrl)(mailAddress, yp, yj, ver),
        _b)])];
        case 5:
          response = _d.sent();
          return [2 /* return*/, response.data];
      }
    });
  });
}
function getInbox(mailAddress) {
  return __awaiter(this, void 0, void 0, function() {
    let htmlPage; let data; let mails; let mailsInfo;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          mailAddress = (mailAddress.split('@')[0] || '').toLowerCase() || mailAddress;
          return [4 /* yield*/, getInboxHtml(mailAddress)];
        case 1:
          htmlPage = _a.sent();
          data = (0, node_html_parser_1.parse)(htmlPage);
          mails = data.querySelectorAll('.m');
          mailsInfo = [];
                    mails === null || mails === void 0 ? void 0 : mails.forEach(function(mail) {
                      let _a; let _b; let _c;
                      const id = mail.getAttribute('id');
                      const title = (_a = mail.querySelector('.lmf')) === null || _a === void 0 ? void 0 : _a.textContent;
                      const summary = (_b = mail.querySelector('.lms')) === null || _b === void 0 ? void 0 : _b.textContent;
                      const time = (_c = mail.querySelector('.lmh')) === null || _c === void 0 ? void 0 : _c.textContent;
                      const mailInfo = {};
                      mailInfo.id = id;
                      mailInfo.title = title;
                      mailInfo.summary = summary;
                      mailInfo.time = time;
                      mailsInfo.push(mailInfo);
                    });
          return [2 /* return*/, mailsInfo];
      }
    });
  });
}
exports.getInbox = getInbox;
