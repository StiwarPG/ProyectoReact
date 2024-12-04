const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


mongoose
    .connect('mongodb://localhost:27017/FusionSport')
    .then(() => console.log('DB is connected'))
    .catch(err => console.error(err));

const rouindex = require('./src/routes/index')
const rouprodu = require('./src/routes/productos')

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(cors()); 
app.use(express.json());


app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/productos', rouprodu);
app.use('/api/index', rouindex)

app.listen(app.get('port'), () => {
    console.log('Server listening on port', app.get('port'));
});
