const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: { type: String},
  occupation: {type: String},
  catchphrase: {type: String},
});

const celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = celebrity;
