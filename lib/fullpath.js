function create(handlebars, opts) {
  function fullpath(path) {
    path = path || '/';

    var config = opts.config.all();
    var basepath = config.site.basepath || '';

    return basepath + path;
  }

  return fullpath;
}

exports.create = create;
