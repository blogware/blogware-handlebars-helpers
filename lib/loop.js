function create(handlebars, opts) {
  function loop(entries, options) {
    var ret = '';

    var limit = Number(options.hash.limit) || 0;
    var length = Math.min(limit, entries.length);

    for (var i = 0; i < length; i++) {
      ret = ret + options.fn(entries[i]);
    }

    return ret;
  }

  return loop;
}

exports.create = create;
