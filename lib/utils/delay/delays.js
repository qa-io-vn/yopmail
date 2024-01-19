'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.delay = void 0;
function delay(time) {
  if (time === void 0) {
    time = 10000;
  }
  return new Promise(function(resolve) {
    return setTimeout(resolve, time);
  });
}
exports.delay = delay;
