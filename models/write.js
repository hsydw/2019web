const mongoose = require('mongoose');
const config = require('../config/database');

const WriteSchema = mongoose.Schema({
  name: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const Write1 = mongoose.model('Write', WriteSchema);

Write1.addWrite = function (newWrite, callback) {
  newWrite.save(callback);
}

module.exports = Write1;