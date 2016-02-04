function create(handlebars, opts) {
  function taglink(name) {
    var tags = opts.tag.all();
    var tag = tags[name];

    var link = '<a href="/tag/' + tag.slug + '/">' + tag.title + '</a>';

    return new handlebars.SafeString(link);
  }

  return taglink;
}

exports.create = create;
