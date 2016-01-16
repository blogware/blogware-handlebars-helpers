var moment = require('moment');

var predefined = {
  'default': 'MMM D, YYYY',
  'iso8601': 'YYYY-MM-DDTHH:mm:ssZ',
  'rfc822': 'ddd, DD MMM YYYY HH:mm:ss ZZ'
}

function create(handlebars, opts) {
  function datetime(date, format) {
    if (typeof format === 'object' && format !== null) {
      format = undefined;
    }

    date = date ? new Date(date) : new Date();
    date = date.toISOString();
    format = format || 'default';
    format = predefined[format] || format;

    return moment(date).format(format);
  }

  return datetime;
}

exports.create = create;
