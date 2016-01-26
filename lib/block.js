function create(handlebars, opts) {
  function block(name, options) {
    var context = this;
    var rendered = options.fn(context);

    rendered = rendered.trim();
    context.__blocks = context.__blocks || {};

    return context.__blocks[name] || rendered;
  }

  return block;
}

exports.create = create;
