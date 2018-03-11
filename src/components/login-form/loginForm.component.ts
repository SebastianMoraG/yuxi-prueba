import { SignupPage } from './../../pages/signup/signup.page';
import { NavController } from 'ionic-angular';
import { Component, EventEmitter, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInterface } from '../../interfaces/login.interface';

@Component({
    selector: 'login-form',
    templateUrl: 'loginForm.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class LoginFormComponent implements OnInit{
    @Output() loginEvent: EventEmitter<UserInterface> = new EventEmitter();
    public loginForm: FormGroup;

    constructor(private _navController: NavController){}

    ngOnInit(): void {
        this._setUpValidators();
    }

    login(): void {
        this.loginEvent.emit(this.loginForm.value);
    }

    goToSignUp(){
        this._navController.push(SignupPage);
    }

    private _setUpValidators():void{
        this.loginForm = new FormGroup({
            email: new FormControl('', [ Validators.required, Validators.minLength(3)]),
            password: new FormControl('', [Validators.required]),
        })
    }
}
