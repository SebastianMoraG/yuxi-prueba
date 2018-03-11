import {Component, OnInit} from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { AlertController } from 'ionic-angular';
import { CAMERA_OPTIONS } from '../../constants/camara.config';

@Component(
	{selector: 'picture-page', 
	templateUrl: './picture.page.html'})
export class PicturePage implements OnInit {
	base64Image: string;

	constructor(
		private _camera: Camera,
		private base64ToGallery: Base64ToGallery,
		private _alertCtrl: AlertController) {}

	ngOnInit() {}

	async takePicture() {
		try {
			const imageData = await this._camera.getPicture(CAMERA_OPTIONS);
			this._confirmSaveInGallery(imageData);
		} catch (error) {
			
		}
	}

	private _confirmSaveInGallery(imageData){
		const alert = this._alertCtrl.create({
			title: '¿Guardar en galeria?',
			message: 'Quieres guardar la imagen en la galeria?',
			buttons: [
			  {
				text: 'Cancel',
				handler: () => {
				  this._showPhoto(imageData);
				}
			  },
			  {
				text: 'Guardar',
				handler: () => {
				  this._savePhoto(imageData);
				}
			  }
			]
		  });
		  alert.present();
	}

	private async _savePhoto(imageData){
		try {
			await this.base64ToGallery.base64ToGallery(imageData, { prefix: '_img' });
			this._showConfirmAction();
			this._showPhoto(imageData);
		} catch (error) {
			
		}
	}

	private _showPhoto(imageData){
		this.base64Image = 'data:image/jpeg;base64,' + imageData;
	}

	private _showConfirmAction(){
		const alert = this._alertCtrl.create({
			title: 'Guardado',
			subTitle: 'Su foto ha sido guardada!',
			buttons: ['Ok']
		});
		alert.present();
	}

}
