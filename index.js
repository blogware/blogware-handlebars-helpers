var _ = require('lodash');

var names = [];

module.exports = function(handlebars, opts) {
  var helpers = {};

  names.forEach(function(name) {
    var path = './lib/' + _.kebabCase(name);
    helpers[name] = require(path)(handlebars, opts);
  });

  return helpers;
}
