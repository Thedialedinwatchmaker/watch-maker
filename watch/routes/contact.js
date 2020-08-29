const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// // Api example
// const members = [
//     {
//         id: 1,
//         name: 'Chester'
//     },
//     {
//         id: 2,
//         name: 'Bob'
//     }
// ];
// router.get('/', (req, res) => {
//     res.json(members);
// });
// router.get('/:id', (req, res) => {
//     res.json(members.filter(member => member.id === parseInt(req.params.id)));
// });

router.post('/', (req, res) => {
    console.log(req.body);

    const output = `
        <p>You have a new contact request</p>
        <h3>Contact details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.message}</p>
    `;

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "chestersirvantes@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.json({message: 'Email sent'});
});

module.exports = router;