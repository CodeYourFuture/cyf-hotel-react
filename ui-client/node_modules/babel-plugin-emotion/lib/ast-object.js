'use strict';

exports.__esModule = true;

var _postcssJs = require('postcss-js');

var _postcssJs2 = _interopRequireDefault(_postcssJs);

var _input = require('postcss/lib/input');

var _input2 = _interopRequireDefault(_input);

var _parser = require('./parser');

var _emotionUtils = require('emotion-utils');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function prefixAst(args, t, path) {
  function isLiteral(value) {
    return t.isStringLiteral(value) || t.isNumericLiteral(value) || t.isBooleanLiteral(value);
  }

  if (Array.isArray(args)) {
    return args.map(function (element) {
      return prefixAst(element, t, path);
    });
  }

  if (t.isObjectExpression(args)) {
    var properties = [];
    args.properties.forEach(function (property) {
      // nested objects
      if (t.isObjectExpression(property.value)) {
        var key = property.computed ? property.key : t.isStringLiteral(property.key) ? t.stringLiteral(property.key.value) : t.identifier(property.key.name);

        var prefixedPseudoSelectors = {
          '::placeholder': ['::-webkit-input-placeholder', '::-moz-placeholder', ':-ms-input-placeholder'],
          ':fullscreen': [':-webkit-full-screen', ':-moz-full-screen', ':-ms-fullscreen']
        };

        var prefixedValue = prefixAst(property.value, t, path);

        if (!property.computed) {
          if (prefixedPseudoSelectors[key.value]) {
            (0, _emotionUtils.forEach)(prefixedPseudoSelectors[key.value], function (prefixedKey) {
              properties.push(t.objectProperty(t.stringLiteral(prefixedKey), prefixedValue, false));
            });
          }
        }

        return properties.push(t.objectProperty(key, prefixedValue, property.computed));
      } else if (
      // literal value or array of literal values
      isLiteral(property.value) || t.isArrayExpression(property.value) && property.value.elements.every(isLiteral)) {
        var _style;

        // bail on computed properties
        if (property.computed) {
          properties.push(property);
          return;
        }

        // handle array values: { display: ['flex', 'block'] }
        var propertyValue = t.isArrayExpression(property.value) ? property.value.elements.map(function (element) {
          return element.value;
        }) : property.value.value;

        var style = (_style = {}, _style[property.key.name] = propertyValue, _style);
        var parsedStyle = _postcssJs2.default.parse(style);
        parsedStyle.source = {};
        parsedStyle.source.input = new _input2.default(parsedStyle.toString(), {
          from: (0, _index.getFilename)(path)
        });
        var prefixedStyle = (0, _parser.expandCSSFallbacks)((0, _parser.processor)(parsedStyle));

        for (var k in prefixedStyle) {
          var _key = t.isStringLiteral(property.key) ? t.stringLiteral(k) : t.identifier(k);
          var val = prefixedStyle[k];
          var value = void 0;

          if (typeof val === 'number') {
            value = t.numericLiteral(val);
          } else if (typeof val === 'string') {
            value = t.stringLiteral(val);
          } else if (Array.isArray(val)) {
            value = t.arrayExpression(val.map(function (i) {
              return t.stringLiteral(i);
            }));
          }

          properties.push(t.objectProperty(_key, value));
        }

        // expressions
      } else {
        properties.push(property);
      }
    });

    return t.objectExpression(properties);
  }

  if (t.isArrayExpression(args)) {
    return t.arrayExpression(prefixAst(args.elements, t, path));
  }

  return args;
}

var ASTObject = function () {
  function ASTObject(props, expressions, composesCount, t) {
    _classCallCheck(this, ASTObject);

    this.props = props;
    this.expressions = expressions || [];
    this.composesCount = composesCount;
    this.t = t;
  }

  ASTObject.prototype.objKeyToAst = function objKeyToAst(key) {
    var t = this.t;

    var matches = this.getDynamicMatches(key);

    if (matches.length) {
      return {
        computed: true,
        composes: key === 'composes',
        ast: this.replacePlaceholdersWithExpressions(matches, key)
      };
    }

    return {
      computed: false,
      composes: key === 'composes',
      ast: t.stringLiteral(key === 'cssFloat' ? 'float' : key)
    };
  };

  ASTObject.prototype.objValueToAst = function objValueToAst(value) {
    var _this = this;

    var composesCount = this.composesCount,
        t = this.t;

    if (typeof value === 'string') {
      var matches = this.getDynamicMatches(value);
      if (matches.length) {
        return this.replacePlaceholdersWithExpressions(matches, value);
      }
      return t.stringLiteral(value);
    } else if (typeof value === 'number') {
      return t.numericLiteral(value);
    } else if (Array.isArray(value)) {
      // should never hit here

      if (value[0] && (value[0].key || value[0].value || value[0].spread)) {
        return this.toAST(value);
      }

      return t.arrayExpression(value.map(function (v) {
        return _this.objValueToAst(v);
      }));
    }

    return ASTObject.fromJS(value, composesCount, t).toAST();
  };

  ASTObject.prototype.getDynamicMatches = function getDynamicMatches(str) {
    var re = /xxx(\d+)xxx/gm;
    var match = void 0;
    var matches = [];
    while ((match = re.exec(str)) !== null) {
      matches.push({
        value: match[0],
        p1: parseInt(match[1], 10),
        index: match.index
      });
    }

    return matches;
  };

  ASTObject.prototype.replacePlaceholdersWithExpressions = function replacePlaceholdersWithExpressions(matches, str) {
    var expressions = this.expressions,
        composesCount = this.composesCount,
        t = this.t;


    var templateElements = [];
    var templateExpressions = [];
    var cursor = 0;
    // not sure how to detect when to add 'px'
    var hasSingleInterpolation = false;
    (0, _emotionUtils.forEach)(matches, function (_ref, i) {
      var value = _ref.value,
          p1 = _ref.p1,
          index = _ref.index;

      var preMatch = str.substring(cursor, index);
      cursor = cursor + preMatch.length + value.length;
      if (preMatch) {
        templateElements.push(t.templateElement({ raw: preMatch, cooked: preMatch }));
      } else if (i === 0) {
        templateElements.push(t.templateElement({ raw: '', cooked: '' }));
      }
      if (value === str) {
        hasSingleInterpolation = true;
      }

      templateExpressions.push(expressions.length ? expressions[p1 - composesCount] : t.identifier('x' + (p1 - composesCount)));
      if (i === matches.length - 1) {
        templateElements.push(t.templateElement({
          raw: str.substring(index + value.length),
          cooked: str.substring(index + value.length)
        }, true));
      }
    });
    if (hasSingleInterpolation) {
      return templateExpressions[0];
    }
    return t.templateLiteral(templateElements, templateExpressions);
  };

  ASTObject.prototype.toAST = function toAST() {
    var _this2 = this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    return this.t.objectExpression(props.map(function (prop) {
      if (_this2.t.isObjectProperty(prop)) {
        return prop;
      }

      var property = prop.property,
          key = prop.key,
          value = prop.value,
          spread = prop.spread,
          shorthand = prop.shorthand;


      if (spread || shorthand) {
        return property;
      }

      var _objKeyToAst = _this2.objKeyToAst(key),
          computed = _objKeyToAst.computed,
          keyAST = _objKeyToAst.ast;

      var valueAST = _this2.objValueToAst(value);

      return _this2.t.objectProperty(keyAST, valueAST, computed);
    }));
  };

  ASTObject.prototype.toJS = function toJS() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    return props.reduce(function (accum, _ref2) {
      var property = _ref2.property,
          key = _ref2.key,
          value = _ref2.value,
          isComputedProperty = _ref2.computed,
          spread = _ref2.spread;

      if (spread) {
        return accum;
      }

      accum[key] = value;
      return accum;
    }, {});
  };

  ASTObject.fromJS = function fromJS(jsObj, composesCount, t) {
    var props = [];
    for (var key in jsObj) {
      if (jsObj.hasOwnProperty(key)) {
        var value = void 0;
        if (Object.prototype.toString.call(jsObj[key]) === '[object Object]') {
          value = jsObj[key];
        } else {
          value = jsObj[key];
        }

        props.push({
          key: key,
          value: value,
          computed: false,
          spread: false,
          property: null
        });
      }
    }

    return new ASTObject(props, [], composesCount, t);
  };

  ASTObject.fromAST = function fromAST(astObj, t, path) {
    function isLiteral(value) {
      return t.isStringLiteral(value) || t.isNumericLiteral(value) || t.isBooleanLiteral(value);
    }

    var expressions = [];

    function replaceExpressionsWithPlaceholders(node) {
      if (t.isArrayExpression(node)) {
        return node.elements.map(replaceExpressionsWithPlaceholders);
      } else if (isLiteral(node)) {
        return node.value;
      } else if (t.isTemplateLiteral(node)) {
        var strs = node.quasis.map(function (x) {
          return x.value.cooked;
        });
        var exprs = node.expressions;
        return (0, _emotionUtils.reduce)(strs, function (arr, str, i) {
          arr.push(str);
          if (i !== strs.length - 1) {
            expressions.push(exprs[i]);
            arr.push('xxx' + (expressions.length - 1) + 'xxx');
          }
          return arr;
        }, []).join('').trim();
      }

      expressions.push(node);
      return 'xxx' + (expressions.length - 1) + 'xxx';
    }

    function convertAstToObj(astObj) {
      var props = [];

      (0, _emotionUtils.forEach)(astObj.properties, function (property, i) {
        var key = void 0;
        if (t.isSpreadProperty(property)) {
          props.push({
            key: null,
            value: null,
            computed: false,
            shorthand: false,
            spread: true,
            property: property
          });
          return;
        }

        if (property.computed) {
          key = replaceExpressionsWithPlaceholders(property.key);
        } else {
          key = t.isIdentifier(property.key) ? property.key.name : property.key.value;
        }

        // nested objects
        if (t.isObjectExpression(property.value)) {
          props.push({
            key: key,
            value: convertAstToObj(property.value),
            computed: property.computed,
            spread: false,
            shorthand: false,
            property: property
          });
        } else {
          props.push({
            key: key,
            value: replaceExpressionsWithPlaceholders(property.value),
            computed: property.computed,
            spread: false,
            shorthand: false,
            property: property
          });
        }
      });
      return props;
    }

    var objectProperties = convertAstToObj(prefixAst(astObj, t, path));
    return new ASTObject(objectProperties, expressions, 0, // composesCount: we should support this,
    t);
  };

  return ASTObject;
}();

exports.default = ASTObject;