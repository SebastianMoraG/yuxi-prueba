import { TabsPage } from './../tabs/tabs';
import { NavController, LoadingController, Loading, AlertController } from 'ionic-angular';
import { SignupService } from './../../services/signup.service';
import { UserInterface } from './../../interfaces/login.interface';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'signup-page',
  templateUrl: './signup.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupPage implements OnInit {
  loading: Loading;

  constructor(
    private _signupService: SignupService,
    private _navController: NavController,
    private _alertCtrl: AlertController,
    private _loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loading = this._loadingCtrl.create({
			content: 'Please wait...'
		  });
  }

  async register(credenciales: UserInterface){
    try {
      this.loading.present()
      await this._signupService.signup(credenciales);
      this.loading.dismiss();
      this._navController.setRoot(TabsPage);
    } catch (error) {
      this.loading.dismiss();
			this._alertCtrl.create({
				title: 'Server Error!',
				subTitle: 'Por favor intentalo mas tarde',
				buttons: ['Ok']
			}).present();
    }
  }

}
