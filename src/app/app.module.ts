import { Camera } from '@ionic-native/camera';
import { RegisterFromComponent } from './../components/register-form/registerForm.component';
import { LoginFormComponent } from './../components/login-form/loginForm.component';
import { ListPage } from './../pages/list/list.page';
import { SignupPage } from './../pages/signup/signup.page';
import { LoginPage } from './../pages/login/login.page';
import { PicturePage } from './../pages/picture/picture.page';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FIREBASE_CONFIG } from '../constants/firebase.config';
import { LoginService } from '../services/login.service';
import { SignupService } from '../services/signup.service';
import { ListService } from '../services/list.service';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { DetailListComponent } from '../components/detail-list/detail-list.component';

@NgModule({
  declarations: [
    MyApp,
    LoginFormComponent,
    RegisterFromComponent,
    DetailListComponent,
    PicturePage,
    LoginPage,
    SignupPage,
    ListPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetailListComponent,
    PicturePage,
    LoginPage,
    SignupPage,
    ListPage,
    TabsPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    ListService,
    SignupService,
    Camera,
    Base64ToGallery,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
