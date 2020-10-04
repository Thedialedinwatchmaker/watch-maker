const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', (req, res) => {
    console.log('Posting');

    console.log(req);
    console.log('Body');

    console.log(req.body);
    console.log(req.body.name);

    const output = `
        <p>You have a new contact request</p>
        <h3>Contact details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.message}</p>
    `
    ;
    const msg = {
        to: "dialedinwatchmaker@gmail.com",
        from: "hans43@ethereal.email",
        subject: 'Watchmaker - New Contact Request',
        html: output
    };

    sgMail.send(msg).then(() => {
        console.log('Message sent');
        console.log(req.body.name);
        res.send({success: true, icon: './assets/checkmark.png'});
    }).catch((error) => {
        console.log(error.response.body)
    })

});


module.exports = router;