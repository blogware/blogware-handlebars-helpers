function create(handlebars, opts) {
  function permalink(path) {
    path = path || '/';

    var site = opts.config.site;
    var hostname = site.hostname || '';
    var basepath = site.basepath || '';

    return hostname + basepath + path;
  }

  return permalink;
}

exports.create = create;
