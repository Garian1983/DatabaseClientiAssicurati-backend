const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  clientId: { type: Schema.Types.ObjectId, ref: 'Client' },
  text: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);
