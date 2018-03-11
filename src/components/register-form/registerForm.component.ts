import { LoginPage } from './../../pages/login/login.page';
import { NavController } from 'ionic-angular';
import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from './registerForm.interface';
import { UserInterface } from '../../interfaces/login.interface';

@Component({
    selector:'register-form',
    templateUrl: 'registerForm.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFromComponent implements OnInit {
    public email = '';
    public password = '';
    public userForm: FormGroup;

    @Output() registerEvent: EventEmitter<UserInterface> = new EventEmitter();

    constructor(private _navController: NavController){}

    ngOnInit() {
        this.userForm = new FormGroup({
            email: new FormControl('', [ Validators.required, Validators.minLength(3)]),
            account: new FormGroup({
                password: new FormControl('', [Validators.required]),
                confirm: new FormControl('', [Validators.required, this.validatePasswordConfirm.bind(this)])
            })
        })
    }

    goToLogin(){
        this._navController.setRoot(LoginPage);
        
    }

    signUp(){
        this.registerEvent.emit({'email': this.userForm.value.email, 'password': this.userForm.value.account.password});
    }

    validatePasswordConfirm(userGroup: FormGroup): any {
        if (this.userForm) {
            return userGroup.value === this.userForm.get('account').get('password').value ? null : { notSame: true};
        }
    }
}