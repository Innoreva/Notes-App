const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({ //object
    name: {
        type: String,
        
        
    },
    email: {
        type: String,
        required:"This field is required."
    },
    textarea: {
        type: String,
        required:"This field is required."
    }
});

// Custom validation for email
studentSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Student', studentSchema);