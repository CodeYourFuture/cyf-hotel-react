'use strict';

exports.__esModule = true;
exports.EmotionParser = exports.processor = exports.staticProcessor = undefined;
exports.parseCSS = parseCSS;
exports.expandCSSFallbacks = expandCSSFallbacks;
exports.parse = parse;

var _input = require('postcss/lib/input');

var _input2 = _interopRequireDefault(_input);

var _declaration = require('postcss/lib/declaration');

var _declaration2 = _interopRequireDefault(_declaration);

var _parser = require('postcss/lib/parser');

var _parser2 = _interopRequireDefault(_parser);

var _postcssNested = require('postcss-nested');

var _postcssNested2 = _interopRequireDefault(_postcssNested);

var _postcssJs = require('postcss-js');

var _postcssJs2 = _interopRequireDefault(_postcssJs);

var _parser3 = require('postcss-js/parser');

var _parser4 = _interopRequireDefault(_parser3);

var _autoprefixer = require('autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _emotionUtils = require('emotion-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var staticProcessor = exports.staticProcessor = _postcssJs2.default.sync([_autoprefixer2.default, _postcssNested2.default]);

var processor = exports.processor = _postcssJs2.default.sync([_autoprefixer2.default]);

function parseCSS(css, extractStatic, filename) {
  // todo - handle errors
  var root = void 0;
  if (typeof css === 'object') {
    root = (0, _parser4.default)(css, { from: filename });
  } else {
    root = parse(css, { from: filename });
  }
  var vars = 0;
  var composes = 0;

  root.walkDecls(function (decl) {
    if (decl.prop === 'composes') {
      if (!/xxx(\d+)xxx/gm.exec(decl.value)) {
        throw new Error('composes must be a interpolation');
      }
      if (decl.parent.nodes[0] !== decl) {
        throw new Error('composes must be the first rule');
      }
      if (decl.parent.type !== 'root') {
        throw new Error('composes cannot be on nested selectors');
      }
      var composeMatches = decl.value.match(/xxx(\d+)xxx/gm);
      var numOfComposes = !composeMatches ? 0 : composeMatches.length;
      composes += numOfComposes;
      vars += numOfComposes;
      decl.remove();
    }
  });

  var styles = expandCSSFallbacks(extractStatic ? staticProcessor(root) : processor(root));

  return {
    styles: styles,
    staticCSSRules: vars === 0 && extractStatic ? stringifyCSSRoot(_postcssJs2.default.parse(styles)) : [],
    composesCount: composes
  };
}

function stringifyCSSRoot(root) {
  return root.nodes.map(function (node) {
    return node.toString();
  });
}

function expandCSSFallbacks(style) {
  var flattened = Object.keys(style).reduce(function (accum, key) {
    if (Array.isArray(style[key])) {
      accum[key] = style[key].join('; ' + (0, _emotionUtils.processStyleName)(key) + ': ');
    } else if (Object.prototype.toString.call(style[key]) === '[object Object]') {
      accum[key] = expandCSSFallbacks(style[key]);
    } else {
      accum[key] = style[key];
    }
    return accum;
  }, {});
  // todo -
  // flatten arrays which haven't been flattened yet
  return flattened;
}

// Parser
function parse(css, opts) {
  var input = new _input2.default(css, opts);

  var parser = new EmotionParser(input);
  parser.parse();

  return parser.root;
}

var EmotionParser = exports.EmotionParser = function (_Parser) {
  _inherits(EmotionParser, _Parser);

  function EmotionParser() {
    _classCallCheck(this, EmotionParser);

    return _possibleConstructorReturn(this, _Parser.apply(this, arguments));
  }

  EmotionParser.prototype.unknownWord = function unknownWord(tokens) {
    if (tokens[0][0] === 'word') {
      var match = /xxx(\d+)xxx/gm.exec(tokens[0][1]);
      if (match) {
        this.init(new _declaration2.default({ prop: '$' + match[1], value: tokens[0][1] }, tokens[0][2], tokens[0][3]));
        return;
      }
    }
    this.spaces += tokens.map(function (i) {
      return i[1];
    }).join('');
  };

  return EmotionParser;
}(_parser2.default);