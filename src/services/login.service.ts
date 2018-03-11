import { UserInterface } from './../interfaces/login.interface';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from '@firebase/util';

@Injectable()
export class LoginService {
    private _isUserLogin: boolean = false;
    
    constructor(private db: AngularFireDatabase) { }

    login(credenciales: UserInterface): Promise<any> {
        const promise = new Promise( (resolve,reject) =>{
            let users = this._getListUsers();
            users.subscribe( (users: Array<UserInterface>) => {
                console.log(users);
                this._isUserLogin = this._validateUser(credenciales, users);
                resolve(this._isUserLogin);
            });
        })
        return promise;
    }

    private _getListUsers(){
        return this.db.list('/Usuarios').valueChanges();
    }

    private _validateUser(credenciales: UserInterface, users: Array<UserInterface>): boolean{
        const user = users.find( (user: UserInterface) => credenciales.email == user.email && credenciales.password == user.password);
        return user !== undefined;
    }
}