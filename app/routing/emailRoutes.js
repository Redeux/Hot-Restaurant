"use strict";

const nodemailer = require('nodemailer');

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hotrestaurant2017@gmail.com',
            pass: 'h0trestaurant'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Hot Restaurant 👻" <hotrestaurant2017@gmail.com>', // sender address
        to: 'sdsautter@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?', // plain text body
        html: '<b>Hello world ?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

