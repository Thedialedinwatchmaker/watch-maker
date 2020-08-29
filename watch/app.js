const express = require('express');
const path = require('path');
const app = express();

// Middleware function example
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};
app.use(logger);

// Middleware Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use routes
// app.use('/api/members', require('./routes/contact'));
app.use('/send', require('./routes/contact'));
// app.post('/send', (req, res) => {
//     console.log(req.body);
// });


// Set __dirname/public as static folder
app.use(express.static(path.join(__dirname, 'public')));

// Open server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening on ' + PORT));