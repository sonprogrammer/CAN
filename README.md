# Wrongnote

![스크린샷 2024-05-20 19 05 43](https://github.com/sonprogrammer/edu2/assets/97154156/3ed3f21e-4ed2-4bd1-841f-90de840fa22c)


## trouble shooting 🔫
1. useHistory chagned to useNavigate(from 6 version)
2. app.use(expression.json) : the problem thing was the order of app.use(expression.json). that was in the back. but that thing is should be in front. actually that should be in front of the routers.
3. i couldn't get req.user : i resolved it by making a request with `withCredentials as true` and also the middlewares order by cors, passport.initialize(), session, passport.session()
