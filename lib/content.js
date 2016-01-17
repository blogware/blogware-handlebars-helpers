var template;

function create(handlebars, opts) {
  function content() {
    if (this.content) {
      return this.content;
    }

    template = template || handlebars.compile('{{{body}}}');

    return new handlebars.SafeString(template(this));
  }

  return content;
}

exports.create = create;
