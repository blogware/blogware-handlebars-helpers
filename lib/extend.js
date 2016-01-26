function create(handlebars, opts) {
  function extend(name, options) {
    var context = this;
    var rendered = options.fn(context);

    rendered = rendered.trim();
    context.__blocks = context.__blocks || {};
    context.__blocks[name] = rendered;
  }

  return extend;
}

exports.create = create;
