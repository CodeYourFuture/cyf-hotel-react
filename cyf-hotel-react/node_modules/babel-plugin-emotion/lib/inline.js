'use strict';

exports.__esModule = true;
exports.getName = getName;
exports.inline = inline;

var _emotionUtils = require('emotion-utils');

function getName(identifierName, prefix) {
  var parts = [];
  parts.push(prefix);
  if (identifierName) {
    parts.push(identifierName);
  }
  return parts.join('-');
}


function createRawStringFromQuasi(strs) {
  var dynamicValueCount = 0;
  var src = strs.reduce(function (arr, str, i) {
    arr.push(str);
    if (i !== strs.length - 1) {
      dynamicValueCount++;
      arr.push('xxx' + i + 'xxx');
    }
    return arr;
  }, []).join('').trim();
  return { src: src, dynamicValueCount: dynamicValueCount };
}

function inline(quasi, identifierName, prefix) {
  var strs = quasi.quasis.map(function (x) {
    return x.value.cooked;
  });
  var hash = (0, _emotionUtils.hashArray)([].concat(strs));
  var name = getName(identifierName, prefix);

  var _createRawStringFromQ = createRawStringFromQuasi(strs),
      src = _createRawStringFromQ.src;

  return {
    name: name,
    hash: hash,
    src: src
  };
}