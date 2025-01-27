const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'New Chat'
  },
  scans: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scan'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Chat', chatSchema);