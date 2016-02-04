var _ = require('lodash');

function create(handlebars, opts) {
  function taglinks(names) {
    if (names && !_.isArray(names)) {
      names = [names];
    }

    if (!names) return;

    var tags = opts.tag.all();

    var links = names.map(function(name) {
      var tag = tags[name];
      var link = '<a href="/tag/' + tag.slug + '/">' + tag.title + '</a>';

      return link;
    });

    links = links.join(', ');

    return new handlebars.SafeString(links);
  }

  return taglinks;
}

exports.create = create;
