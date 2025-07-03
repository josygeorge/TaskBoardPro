const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    title: String,
    description: String,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});

module.exports = mongoose.model('Board', boardSchema);
