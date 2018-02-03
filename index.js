let R = require('ramda');
const look = require('ramda-debug');
look.on()
R = look.wrap(R);

var getStateCode = R.pipe(
  JSON.parse,
  R.prop('user'),
  R.prop('address'),
  R.prop('state'),
  R.toUpper
);

getStateCode('{"user":{"address":{"state":"ny"}}}');
