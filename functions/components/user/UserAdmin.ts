import * as admin from 'firebase-admin';
// import { plantillaEmailBienvenida, plantillaEmailDespedida } from '../helpers/PlantillasEmail';
// import { Email } from '../helpers/EmailHelper';
// import { HubSpotHelper } from '../helpers/HubSpotHelper';

export class UserAdmin {
    
    async registerEmailUser( name: string, email: string ) {
        console.log( 'se registra email' );
        return admin
            .firestore()
            .collection( 'emailUsers' )
            .add( {
                name: name,
                email: email,
            } );
    };
    
    // async sendEmailWelcome( nombres, email ) {
    //     const to = email;
    //     const from = 'angelhuamannahui@gmail.com';
    //
    //     const textHtml = plantillaEmailBienvenida( nombres );
    //
    //     const objEmail = new Email();
    //
    //     return objEmail.sendEmail(
    //         from,
    //         to,
    //         '',
    //         'Video Blogeek - Bienvenido a la Comunidad de Videos Geek',
    //         textHtml,
    //     );
    // }
    //
    // async sendEmailGoodBye( nombres, email ) {
    //     const to = email;
    //     const from = 'angelhuamannahui@gmail.com';
    //
    //     const textHtml = plantillaEmailDespedida( nombres );
    //
    //     const objEmail = new Email();
    //
    //     return objEmail.sendEmail(
    //         from,
    //         to,
    //         '',
    //         'Video Blogeek - Espera!! no te vayas de la Comunidad de Videos Geek',
    //         textHtml,
    //     );
    // }
    //
    // async syncCRM( nombres, apellidos, email ) {
    //     const hubSpot = new HubSpotHelper();
    //     return hubSpot.crearUsuario( nombres, apellidos, email );
    // }
}

