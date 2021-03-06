const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Middleware Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

// Use routes
app.use('/send', require('./routes/contact'));
app.use('/getTweets', require('./routes/twitter'));

// Set __dirname/public as static folder
app.use(express.static(path.join(__dirname, 'public')));

// Open server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening on ' + PORT));
