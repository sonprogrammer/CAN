const express = require('express')
const cors = require('cors')

const session = require('express-session')
const MongoStore = require('connect-mongo');
const userModel = require('./db/models/userModel');
const { Types: { ObjectId } } = require('mongoose');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const userRouter = require('./Routes/userRouter')
const problemRouter = require('./Routes/problemRouter');
const noteRouter = require('./Routes/noteRouter')
const problemModel = require('./db/models/problemModel');
require('dotenv').config()


const app = express()



mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('mongodb connect success'))
.catch(err => console.log('mongodb connect error'))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true,
    credentials: true
}))

app.use(passport.initialize()) //passport를 사용한다고 express에 알림
app.use(session({
    secret: 'secret',
    resave: true, //유저가 서버로 요청할 때마다 세션 갱신할건지 여부
    saveUninitialized: false, //로그인 안해도 세션 만들것인지
    cookie: {
        maxAge: 60 * 60 * 1000,
        secure: false,
    },
    store: MongoStore.create({ //세션데이터를 디비에 저장
        mongoUrl: process.env.MONGODB_URL, //db접속용 url
        dbName: 'test' //db이름
    })
   
}))


app.use(passport.session()) //session을 이용하여 passport를 동작한다

//* 로그인 -> 디비에 있는 정보와 사용자가 입력한 정보랑 일치하는지 확인 
passport.use(new LocalStrategy(
    {
    usernameField : 'userId',
    passwordField : 'userPassword',
    session: true
    }
    , 
    async (userId, userPassword, cb) =>{
    try {
        const user = await userModel.findOne({userId : userId})
        if(!user){
            return cb(null, false, { message: 'User not founddd'})
        }
        const result = await bcrypt.compare(userPassword, user.userPassword)
        if(result){
            return cb(null, user)
        }else{
            return cb(null, false, { message : 'Password mismatch' })
        }
    } catch (error) {
        console.error(error)
        return cb(error)
        }
    }
))


//* 로그인시 세션만들기
passport.serializeUser((user, done) => {
    done(null, {id : user.id})
})


//* 쿠키 까보는 역할 -> 사용자의 세션 정보를 검색해 사용자 객체로 변환하는 역할 -> 어디서든 req.user하면 유저 정보가 뜬다
passport.deserializeUser(async (user, done) => {
try {
    const result = await userModel.findOne({_id : user.id})
    if(!result){
        console.log('user not found', user.id)
    }
    done(null, result)
} catch (error) {
    console.log('error deserial', error)
    done(error)
}

})



app.get('/', (req, res) =>{
    res.send('Welcomedfd')
})


app.use("/api/account", userRouter)
app.use("/api/problem", problemRouter)
app.use('/api/note', noteRouter)

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})