const express = require('express');
const app = express();
const path = require('path');
const { title } = require('process');
const router = express.Router();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const session = require('express-session');
const User = require('./models/userModel')
const passport = require('passport')
//creating environment file
//require('dotenv').config();

const config = require('./config/database.js')

const cartRoutes = require('./routes/cartRoutes')
const checkoutRoutes = require('./routes/checkoutRoutes')
const aboutRoutes = require('./routes/aboutRoutes')
const homeRoutes = require('./routes/homeRoutes')
const registerRoutes = require('./routes/registerRoutes')
const indexRoutes = require('./routes/indexRoutes');
const signupRoutes = require('./routes/signupRoutes');
const authRoutes = require('./routes/authRoutes.js');
const productRoutes = require('./routes/productRoutes');
const ufRoutes = require('./routes/ufRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const aoRoutes = require('./routes/aoRoutes')
const aoRoutes3 = require('./routes/aoRoutes3')
const helpRoutes = require('./routes/helpRoutes')
const ufRegisterRoutes = require('./routes/ufRegisterRoutes')
const foRegisterRoutes = require('./routes/foRegisterRoutes')


app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))
// * Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname , 'public/products')))

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// creating connection btn the controller and database
mongoose.connect(config.database, {
    //collects data from front end then formats it
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
// checking for db connection
db.once('open', () => {
    console.log('connected to database')
})
db.on('error', (err) => {
    console.error(err)
})


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


app.use(express.static(path.join(__dirname, "public")));


//add the router
app.use('/', registerRoutes);
app.use('/', aboutRoutes);
app.use('/', homeRoutes);
app.use('/', indexRoutes);
app.use('/', cartRoutes);
app.use('/', checkoutRoutes);
app.use('/', signupRoutes);
app.use('/', authRoutes);
app.use('/', aoRoutes);
app.use('/', aoRoutes3);
app.use('/', ufRoutes);
app.use('/', uploadRoutes);
app.use('/', helpRoutes);
app.use('/', productRoutes);
app.use('/', ufRegisterRoutes);
app.use('/', foRegisterRoutes);



app.get('*', (req, res) => {
    res.status(404).send('page doesnot exist')
})








app.listen(3000, () => console.log('Listening on port 3000'));
