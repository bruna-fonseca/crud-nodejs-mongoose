const mongoose = require('mongoose');

const SubscriberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: new Date()
  }
});

module.exports = mongoose.model('subscriber', SubscriberSchema);