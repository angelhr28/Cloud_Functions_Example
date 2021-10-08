// const requestAPI = require( 'request' );
// import * as functions from 'firebase-functions';
//
// const claveapihubspot = functions.config().configuration.claveapihubspot;
//
// export class HubSpotHelper {
//     crearUsuario( nombres, apellidos, email ) {
//         return requestAPI.post(
//             {
//                 headers: {
//                     'content-type': 'application/json',
//                 },
//                 url: `https://api.hubapi.com/contacts/v1/contact/?hapikey=${ claveapihubspot }`,
//                 body: JSON.stringify( {
//                     properties: [
//                         {
//                             property: 'email',
//                             value: email,
//                         },
//                         {
//                             property: 'firstname',
//                             value: nombres,
//                         },
//                         {
//                             property: 'lastname',
//                             value: apellidos,
//                         },
//                     ],
//                 } ),
//             },
//             ( error, response, body ) => {
//                 if ( error ) {
//                     return console.error( error );
//                 }
//                 return console.log( JSON.parse( body ) );
//             },
//         );
//     }
// }
