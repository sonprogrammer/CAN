const express = require('express');
const userController = require('../Controller/userController')
const router = express.Router()

const search = require('../utils/search')


// const mongoose = require('mongoose');
const passport = require('passport')
// const session = require('express-session')

// const MongoStore = require('connect-mongo');
// const { UserSearch } = require('../utils/search');



// * 로그인 api
router.post('/login', (req, res, next) =>{
    passport.authenticate('local', async (err, user, info) =>{
        if(err){
            console.error(err)
            return next(err)
        }
        if(info){
            return res.status(401).send(info.message)
        }
         return req.logIn(user, async(loginerror)=>{
             if(loginerror){
                console.error(loginerror)
                return next(loginerror)
            }
            console.log('req.isAuthenticated', req.isAuthenticated())
            console.log('req.user', req.user)
            return res.status(200).json(user)
        })
    })(req, res, next)
})
// router.post('/login', (req, res) => {
//     console.log('req.isAuthenticatedfdf', req.isAuthenticated());
//     console.log('req.user', req.user);
//     res.status(200).json(req.user);
// });




// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/browse',
//     failureRedirect: '/'
// }))


// * 아이디 중복확인 api
router.get('/check-email', async(req, res, next)=>{
    console.log('rea.user', req.user)
    const {email} = req.query
    try {
        await search.EmailExist(email)
        res.status(200).json({message: 'can use email'})
    } catch (error) {
        next(error)
    }
})



//* 로그아웃 api
router.post('/logout', (req, res, next) => {
    console.log('logout: req.user', req.user)
    req.logout(function(err){
        if(err) { return next(err)}
        res.redirect('/')
    }) //req.logout()으로 세션 삭제
    res.send('Logout successful')
})

//* 회원가입 API
router.post("/signup", userController.createUser)

// *유저들의 정보
router.get('/', userController.getUser)

//*현재 로그인된 정보
router.get('/current-user', (req, res)=>{
    console.log('GET -> req.user', req.user)
    console.log('GET -> res.authentication', req.isAuthenticated())
    if(req.user){
        res.status(200).json(req.user)
    }else{
        res.status(404).json({message: 'no user logged in'})
    }
})



module.exports = router;

