const mongoose = require('mongoose')

const problemSchema = new mongoose.Schema(
    {
        problem:{
            type: String,
            required: true,
        },
        answer:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,   
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    }
)

module.exports = mongoose.model('problem',problemSchema)