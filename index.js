var Type = require('transformer-type');

module.exports = Type({
  // @context and type filled in automatically.
  'id': 'hex',
  'description': 'Hexadecimal string representation.',
  'schema': "string"
});
