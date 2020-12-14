const mongoose = require('mongoose');

const Discussion_schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    comments: [{
        name: String,
        comment: String
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Discussions', Discussion_schema);