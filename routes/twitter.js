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
    const LATEST_UPDATES_COUNT = 3;
    let latest_updates_ids = [];
    T.get('statuses/user_timeline', params, function (err, tweets, response) {
        if (!err) {
            console.log(tweets[1].id);
            for (let i = 0; i < LATEST_UPDATES_COUNT; i++) {
                console.log(tweets[i]);
                latest_updates_ids.push(tweets[i].id_str);
            }
            console.log(latest_updates_ids[0]);
            res.send({success: true, icon: './checkmark.png', latest_updates_ids: latest_updates_ids});
        } else {
            console.log(err);
            res.send({error: true, icon: './cross.png'})
        }

        console.log(latest_updates_ids);
    });

});
//
// function cleanData(data) {
//     let cleanedData = [];
//     cleanedData.push(data['id']);
//     cleanedData.push(data['screen_name'])
//     return cleanedData;
// }

module.exports = router;