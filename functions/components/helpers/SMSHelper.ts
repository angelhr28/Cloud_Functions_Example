// import Twilio from 'twilio';
//
// import * as functions from 'firebase-functions';
//
// exports.SMSHelper = (mensaje, numeroCelular) => {
//   const SID = functions.config().configuration.accountsidtwilio
//   const authToken = functions.config().configuration.authtokentwilio
//
//   const twilioCliente = new Twilio(SID, authToken)
//
//   return twilioCliente.messages.create({
//     to: numeroCelular,
//     from: '+18707824011',
//     body: mensaje
//   })
// }
