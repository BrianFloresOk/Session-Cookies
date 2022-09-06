const express = require('express')
const app = express()
const PORT = 3000
const session = require('express-session')
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/indexRouter')
const path = require('path')
const userCookie = require('./middlewares/userCookie')


app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

/* app.set('trust proxy', 1); */
app.use(session({
    secret: "Top secret msg",
    resave: false,
    saveUninitialized: true,
}))
app.use(userCookie)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views')); 

app.use('/', indexRouter)


app.listen(PORT, () => {
    console.log(`Servidor levantado http://localhost:${PORT}`);
})