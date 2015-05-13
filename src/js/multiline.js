// Used from https://github.com/sindresorhus/strip-indent and https://github.com/sindresorhus/multiline

var ib_stripIndent = function (str) {
  var match = str.match(/^[ \t]*(?=\S)/gm);

  if (!match) {
    return str;
  }

  var indent = Math.min.apply(Math, match.map(function (el) {
    return el.length;
  }));

  var re = new RegExp('^[ \\t]{' + indent + '}', 'gm');

  return indent > 0 ? str.replace(re, '') : str;
};

// start matching after: comment start block => ! or @preserve => optional whitespace => newline
// stop matching before: last newline => optional whitespace => comment end block
var reCommentContents = /\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//;

var ib_multiline = function (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function');
  }

  var match = reCommentContents.exec(fn.toString());

  if (!match) {
    throw new TypeError('Multiline comment missing.');
  }

  return match[1];
};

ib_multiline.stripIndent = function (fn) {
  return ib_stripIndent(ib_multiline(fn));
};
