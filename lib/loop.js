function create(handlebars, opts) {
  function loop(entries, options) {
    var ret = '';
    var limit;

    limit = Number(options.hash.limit);
    limit = limit === 0 ? limit : (limit || entries.length);
    limit = Math.min(limit, entries.length);

    for (var i = 0; i < limit; i++) {
      ret = ret + options.fn(entries[i]);
    }

    return ret;
  }

  return loop;
}

exports.create = create;
