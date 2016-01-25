function create(handlebars, opts) {
  function range(entries, begin, end, options) {
    var ret = '';

    for (var i = begin; i <= end; i++) {
      ret = ret + options.fn(entries[i]);
    }

    return ret;
  }

  return range;
}

exports.create = create;
