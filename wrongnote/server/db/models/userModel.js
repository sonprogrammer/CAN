const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required: true,
        },
        userPassword:{
            type: String,
            required: true,
        }
        
    }
)


module.exports = mongoose.model('User', userSchema);