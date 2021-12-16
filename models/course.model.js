const mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: 'This field is required.'
    },
    referenceNumber: {
        type: String
    },
    description: {
        type: String
    },
    url:{
        type: String
    },
});

var userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

mongoose.model('Course', courseSchema);
mongoose.model('User', userSchema);