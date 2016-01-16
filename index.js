var _ = require('lodash');

var names = [
  'content',
  'datetime',
  'fullpath',
  'permalink'
];

function create(handlebars, opts) {
  var helpers = {};

  names.forEach(function(name) {
    var path = './lib/' + _.kebabCase(name);
    helpers[name] = require(path).create(handlebars, opts);
  });

  return helpers;
}

exports.create = create;
