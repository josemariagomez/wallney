import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Storage } from '@ionic/storage'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string;
  user: string;
  email: string;
  password: string;
  passwordconfirm: string;

  constructor(
    public api: ApiService,
    private router: Router,
    public storage: Storage,
    public toastController: ToastController
    ) { }

  ngOnInit() {
  }

  async register(){
    this.api.register(this.name,this.user,this.email,this.password,this.passwordconfirm)
    .then((response) => {
      this.storage.set('user', JSON.parse(JSON.stringify(response)).user);
      this.storage.set('token', JSON.parse(JSON.stringify(response)).access_token);
      this.router.navigate(['/tabs/tab1'])
    })
    .catch(async (error) => {
      await this.presentToast('Error al registrarte');
      console.log(error)      
    });
  }

  goLogin(){
    this.router.navigateByUrl('/login')
  }

  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
