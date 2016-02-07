var excerpts = require('excerpts');

function create(handlebars, opts) {
  function excerpt(html, options) {
    var hash = options.hash;

    if (hash.words != null) {
      hash.words = parseInt(hash.words, 10);
    }

    if (hash.characters != null) {
      hash.characters = parseInt(hash.characters, 10);
    }

    return excerpts(html, options.hash);
  }

  return excerpt;
}

exports.create = create;
