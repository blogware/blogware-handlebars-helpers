var _ = require('lodash');

function create(handlebars, opts) {
  function tags(options) {
    var _tags = this.tags;

    if (!_.isArray(_tags)) {
      _tags = [_tags];

    }

    var output = _tags.map(function(tag) {
      return ['<a href="/tag/', _.kebabCase(tag), '/">', tag, '</a>'].join('');
    }).join(', ');

    output = [options.hash.prefix, output].join('');

    return new handlebars.SafeString(output);
  }

  return tags;
}

exports.create = create;
