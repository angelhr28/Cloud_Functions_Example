'use strict';

import { UserAdmin } from './UserAdmin';

export default class UserController {
    
    public async create( user: any ) {
        const userAdmin = new UserAdmin();
        
        try {
            // const service = await userAdmin.sendEmailWelcome( user.displayName, user.email );
            
            return await userAdmin.registerEmailUser(
                user.displayName,
                user.email,
            );
            
        } catch (e) {
            console.error( `Error en la creación de user => ${ e }` );
            return { message: e.message }
        }
    }
    
    // public async delete( user ) {
    //     const userAdmin = new UserAdmin();
    //
    //     return userAdmin
    //         .sendEmailGoodBye( user.displayName, user.email )
    //         .catch( error => {
    //             console.error( `Error en la creación de user => ${ error }` );
    //         } );
    // }
    //
    // public async createCRM( user ) {
    //     const userAdmin = new UserAdmin();
    //     return userAdmin.syncCRM(
    //         user.displayName,
    //         user.displayName,
    //         user.email,
    //     );
    // }
}

