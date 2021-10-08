import * as functions from 'firebase-functions';
import UserController from '../components/user/UserController';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest( ( request, response ) => {
    functions.logger.info( 'Hello logs!', { structuredData: true } );
    response.send( 'Hello from Firebase!' );
} );

export const createdUser = functions.auth
    .user()
    .onCreate( new UserController().create );