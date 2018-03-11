import { UserInterface } from './../interfaces/login.interface';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SignupService {

    constructor(private db: AngularFireDatabase) { }

    signup(credenciales: UserInterface):Promise<any>{
        const promise = new Promise( (resolve, reject) => {
            this._saveUSer(credenciales)
                .then( res => resolve(res))
                .catch( err => reject(err));
        })
        return promise;       
    }

    private _saveUSer(credenciales: UserInterface):any{
        return this.db.list('/Usuarios').push(credenciales);
    }
}