const userModel = require('../db/models/userModel');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');



async function createUser(req, res, next){
    console.log('req.body : ', req.body)
    try {
        let hashedpPassword = await bcrypt.hash(req.body.userPassword, 10)
        const newUser = await userModel.create({
            userId : req.body.userId,
            userPassword : hashedpPassword
        })
        res.status(201).json(newUser)

    } catch (error) {
        next(error)
    }
}


//관리자만 접근가능
async function getUser(req, res, next){
    try {
        const users = await userModel.find()
        res.status(200).json(users)
    } catch (error) {
        next('error',error)
    }
}


module.exports = {
    createUser,
    getUser,
}
