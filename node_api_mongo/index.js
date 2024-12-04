const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


mongoose
    .connect('mongodb://localhost:27017/FusionSport')
    .then(() => console.log('DB is connected'))
    .catch(err => console.error(err));

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(cors()); 
app.use(express.json());


app.use('/api/productos', require('./src/routes/productos'));


app.listen(app.get('port'), () => {
    console.log('Server listening on port', app.get('port'));
});
