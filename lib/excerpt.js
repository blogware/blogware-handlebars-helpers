var _ = require('lodash');
var htmlToText = require('html-to-text');

function create(handlebars, opts) {
  function excerpt(html, length) {
    if (typeof length === 'object' && length !== null) {
      length = undefined;
    }

    html = html || '';
    length = Number(length) || 160;

    var text = htmlToText.fromString(html);

    text = _.truncate(_.trim(text), {
      length: length
    });

    return text;
  }

  return excerpt;
}

exports.create = create;
