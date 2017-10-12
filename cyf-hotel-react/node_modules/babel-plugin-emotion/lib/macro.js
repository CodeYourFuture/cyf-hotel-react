'use strict';

var _index = require('./index');

var _babelUtils = require('./babel-utils');

var _emotionUtils = require('emotion-utils');

var _babelMacros = require('babel-macros');

module.exports = (0, _babelMacros.createMacro)(macro);

function macro(_ref) {
  var references = _ref.references,
      state = _ref.state,
      t = _ref.babel.types;

  if (!state.inline) state.inline = true;
  (0, _emotionUtils.forEach)((0, _emotionUtils.keys)(references), function (referenceKey) {
    if (referenceKey === 'injectGlobal') {
      references.injectGlobal.forEach(function (injectGlobalReference) {
        var path = injectGlobalReference.parentPath;
        if (t.isIdentifier(path.node.tag) && t.isTemplateLiteral(path.node.quasi)) {
          (0, _index.replaceCssWithCallExpression)(path, (0, _babelUtils.buildMacroRuntimeNode)(injectGlobalReference, state, 'injectGlobal', t), state, t, undefined, true);
        }
      });
    } else if (referenceKey === 'fontFace') {
      references.fontFace.forEach(function (fontFaceReference) {
        var path = fontFaceReference.parentPath;
        if (t.isIdentifier(path.node.tag) && t.isTemplateLiteral(path.node.quasi)) {
          (0, _index.replaceCssWithCallExpression)(path, (0, _babelUtils.buildMacroRuntimeNode)(fontFaceReference, state, 'fontFace', t), state, t, undefined, true);
        }
      });
    } else if (referenceKey === 'css') {
      references.css.forEach(function (cssReference) {
        var path = cssReference.parentPath;
        var runtimeNode = (0, _babelUtils.buildMacroRuntimeNode)(cssReference, state, 'css', t);
        if (t.isIdentifier(path.node.tag) && t.isTemplateLiteral(path.node.quasi)) {
          (0, _index.replaceCssWithCallExpression)(path, runtimeNode, state, t);
        } else if (!path.node.arguments[1] && path.node.arguments[0]) {
          (0, _index.replaceCssObjectCallExpression)(path, runtimeNode, t);
        } else {
          cssReference.replaceWith(runtimeNode);
        }
      });
    } else if (referenceKey === 'keyframes') {
      references.keyframes.forEach(function (keyframesReference) {
        var path = keyframesReference.parentPath;
        if (t.isIdentifier(path.node.tag) && t.isTemplateLiteral(path.node.quasi)) {
          (0, _index.replaceCssWithCallExpression)(path, (0, _babelUtils.buildMacroRuntimeNode)(keyframesReference, state, 'keyframes', t), state, t);
        }
      });
    } else {
      references[referenceKey].forEach(function (reference) {
        reference.replaceWith((0, _babelUtils.buildMacroRuntimeNode)(reference, state, referenceKey, t));
      });
    }
  });
  (0, _babelUtils.addRuntimeImports)(state, t);
}