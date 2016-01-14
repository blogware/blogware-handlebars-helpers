function create(handlebars, opts) {
  function fullpath(path) {
    path = path || '/';

    var basepath = opts.config.site.basepath || '';

    return basepath + path;
  }

  return fullpath;
}

exports.create = create;
