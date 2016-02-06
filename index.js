var _ = require('lodash');

var names = [
  'block',
  'content',
  'datetime',
  'excerpt',
  'extend',
  'fullpath',
  'loop',
  'permalink',
  'range'
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
