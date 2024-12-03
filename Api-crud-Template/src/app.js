
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app=express();
mongoose.connect('mongodb://localhost:27017/FusionSport');
db =>console.log('DB is connected')
.catch(err=>console.error(err));


const indexRoutes = require('./routes/index')

// setting
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs');

// middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use('/', indexRoutes);


// server is listening

app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
});

