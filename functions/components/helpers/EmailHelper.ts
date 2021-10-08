// const nodemailer = require( 'nodemailer' );
// import * as functions from 'firebase-functions';
//
// export class Email {
//     constructor() {
//         const userEmail = functions.config().configuration.email;
//         const passwordEmail = functions.config().configuration.password;
//
//         const mailTransport = nodemailer.createTransport( {
//             host: 'smtp.gmail.com',
//             port: 465,
//             secure: true,
//             tls: { rejectUnauthorized: false },
//             auth: {
//                 user: userEmail,
//                 pass: passwordEmail,
//             },
//         } );
//     }
//
//     sendEmail( from, to, bcc, subject, bodyHTML ) {
//         const mailOptions = {
//             from: from,
//             to: to,
//             bcc: bcc,
//         };
//
//         mailOptions.subject = subject;
//         mailOptions.html = bodyHTML;
//
//         return this.mailTransport.sendMail( mailOptions );
//     }
// }
//
