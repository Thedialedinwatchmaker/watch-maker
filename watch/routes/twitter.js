const express = require('express');
const router = express.Router();
const Twit = require('twit');


const apikey = process.env.TWITTER_API_KEY;
const apiSecretkey = process.env.TWITTER_API_SECRET_KEY;
const accessToken = process.env.TWITTER_ACCESS_TOKEN;
const accessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;


var T = new Twit({
    consumer_key: apikey,
    consumer_secret: apiSecretkey,
    access_token: accessToken,
    access_token_secret: accessTokenSecret,
});

var params = {screen_name: 'chestCervant'};

router.get('/', (req, res) => {
    T.get('statuses/user_timeline', params, function (err, tweets, res) {
        if (!err) {
            console.log(tweets);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;