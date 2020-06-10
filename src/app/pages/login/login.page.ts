import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoginPageModule } from './login.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  passwordType: string = 'password';
  passwordIcon: string = 'eye';
  passwordShow: boolean = false;

  email: string;
  password: string;
  token: string;
  user: any;
  access_token: string;

  constructor( public api: ApiService,
    public storage: Storage,
    private router: Router,
    public toastController: ToastController
    ){ }

  ngOnInit() {
    this.logged();
  }

  public togglePassword(){
    if(this.passwordShow){
      this.passwordShow = false;
      this.passwordType = 'password';
      this.passwordIcon = 'eye';
    }else{
      this.passwordShow = true;
      this.passwordType = "text";
      this.passwordIcon = 'eye-off';
    }
  }
  
  async login(){
    this.api.login(this.email,this.password)
    .then(async (response) => {
      console.log();
      if (JSON.parse(JSON.stringify(response)).status_code == 500) {
          await this.presentToast('Error al iniciar sesión');
      }
      if (JSON.parse(JSON.stringify(response)).status_code == 200) {
          this.storage.set('user', JSON.parse(JSON.stringify(response)).user);
          this.storage.set('token', JSON.parse(JSON.stringify(response)).access_token);
          this.router.navigate(['/tabs/tab1'])
      }
    })
    .catch(async (error) => {
      await this.presentToast('Error al iniciar sesión');
      console.log(error)      
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  goRegister(){
    this.router.navigateByUrl('/register')
  }

  resetPassword(){
    this.router.navigateByUrl('/rest-password')
  }

  async logged(){
    let token = await this.storage.get('token');
    this.access_token ='Bearer ' + token;
    this.api.logged(this.access_token)
    .then(async (response) => {
      await this.storage.set('user', JSON.parse(JSON.stringify(response)).body);
      this.router.navigate(['/tabs/tab1'])
    }).catch(async (error) => {
      await this.presentToast('Por favor, inicie sesión o registrese.');
      console.log(error)      
    });
  }

}
