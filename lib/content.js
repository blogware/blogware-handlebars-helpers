var template;

module.exports = function(handlebars, opts) {
  function content() {
    template = template || handlebars.compile('{{{body}}}');
    return new handlebars.SafeString(template(this));
  }

  return content;
}
