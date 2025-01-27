const mongoose = require('mongoose');

const scanSchema = new mongoose.Schema({
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat',
    required: true
  },
  url: {
    type: String,
    required: true
  },
  headers: {
    type: Map,
    of: [String]
  },
  missingHeaders: [String],
  securityOptions: {
    headerChecks: {
      type: Map,
      of: Boolean,
      default: new Map()
    },
    sslChecks: {
      type: Map,
      of: Boolean,
      default: new Map()
    },
    serverChecks: {
      type: Map,
      of: Boolean,
      default: new Map()
    },
    vulnerabilityChecks: {
      type: Map,
      of: Boolean,
      default: new Map()
    }
  },
  subdomains: [{
    url: String,
    headers: Map,
    missingHeaders: [String],
    securityChecks: Map
  }],
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Scan', scanSchema);