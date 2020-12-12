const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
//Middlewares
app.use(cors());
app.use(bodyParser.json());

const postRoute = require('./routes/discussions');
app.use('/discussions', postRoute);

//connecting to db
mongoose.connect(process.env.MONGO_URI,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }, 
    () => {
        console.log('connected to db?');
    }
)

app.listen(3000);