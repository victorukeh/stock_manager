const express = require('express')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const app = express();
const mongoose = require('mongoose') 



// // DB config
// const db = require('./config/keys').MongoURI;
// console.log('db', db.MongoURI);

// //Connect to Mongo
// mongoose.connect(db.MongoURI, { useNewUrlParser: true,
// useUnifiedTopology: true }) // useUnifiedTopology: true or useNewUrlParser: true
// .then(() => console.log('MongoDB Connected...'))
// .catch(err => console.log(err));

const dotenv = require('dotenv').config()
require('./config/keys')()

const homeRouter = require('./routes/home')
const customerRouter = require('./routes/customer');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', homeRouter)
app.use('/customers', customerRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log('server started on port ' + PORT + ' ...')}); 