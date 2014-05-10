var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'hex',
  'description': 'Hexadecimal string representation.',
  'schema': "string"
});
