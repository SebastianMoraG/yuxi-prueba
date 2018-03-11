import { TabsPage } from './../tabs/tabs';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { LoginService } from './../../services/login.service';
import { UserInterface } from './../../interfaces/login.interface';
import { Component, ChangeDetectionStrategy, OnInit} from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage implements OnInit {
	loading: Loading;
	
  	constructor(
		private _loginService: LoginService,
		private _navController: NavController,
		private _alertCtrl: AlertController,
		private _loadingCtrl: LoadingController) { }

	ngOnInit(){
		this.loading = this._loadingCtrl.create({
			content: 'Please wait...'
		  });
	}	
  	async login(credenciales: UserInterface){
	  	try {
			this.loading.present();
			const isUserLogin = await this._loginService.login(credenciales);
			this.loading.dismiss();
			this._validateAnswer(isUserLogin);
	  	} catch (error) {
			this.loading.dismiss();
			this._alertCtrl.create({
				title: 'Server Error!',
				subTitle: 'Por favor intentalo mas tarde',
				buttons: ['Ok']
			}).present();
		}
  	}

  	private _validateAnswer(isUserLogin: boolean){
		if(isUserLogin){
			this._navController.setRoot(TabsPage);
		}
		else{
			this._alertCtrl.create({
				title: 'Failed!',
				subTitle: 'Su correo o contraseña no coincide',
				buttons: ['Ok']
			}).present();
		}
 	 }

}
