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
exports.getMailDetails = exports.getMailDetailsHtml = void 0;
const node_html_parser_1 = require('node-html-parser');
const axios_1 = require('axios');
const baseUrl_1 = require('../baseUrl');
const cookies_1 = require('../permission/cookies');
function getMailDetailsHtml(id, mailAddress) {
  return __awaiter(this, void 0, void 0, function() {
    let cookies; let response;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          mailAddress = (mailAddress.split('@')[0] || '').toLowerCase() || mailAddress;
          return [4 /* yield*/, (0, cookies_1.createGetMailCookies)()];
        case 1:
          cookies = _a.sent();
          return [4 /* yield*/, (0, axios_1.default)({
            headers: {
              Cookie: cookies + '; compte='.concat(mailAddress, '; ywm=').concat(mailAddress),
              Host: 'yopmail.com',
            },
            method: 'get',
            url: (0, baseUrl_1.getMailDetailsUrl)(id, mailAddress),
          })];
        case 2:
          response = _a.sent();
          return [2 /* return*/, response.data];
      }
    });
  });
}
exports.getMailDetailsHtml = getMailDetailsHtml;
function getMailDetails(id, mailAddress) {
  let _a;
  return __awaiter(this, void 0, void 0, function() {
    let html; let data; let details;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          mailAddress = (mailAddress.split('@')[0] || '').toLowerCase() || mailAddress;
          return [4 /* yield*/, getMailDetailsHtml(id, mailAddress)];
        case 1:
          html = _b.sent();
          data = (0, node_html_parser_1.parse)(html);
          details = {};
          details.body = (_a = data.querySelector('#mail')) === null || _a === void 0 ? void 0 : _a.textContent;
          return [2 /* return*/, details];
      }
    });
  });
}
exports.getMailDetails = getMailDetails;
