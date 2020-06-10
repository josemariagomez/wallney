import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.page.html',
  styleUrls: ['./rest-password.page.scss'],
})
export class RestPasswordPage implements OnInit {

  email: any;

  constructor( 
    public api: ApiService,
    private router: Router,
    public toastController: ToastController
    ) { }

  ngOnInit() {
  }

  resetPassword(){
    this.api.resetpassword(this.email)
    .then(async (response) => {
      await this.presentToast('Revise el correo, le hemos enviado un correo para cambiar de contraseña');
      this.router.navigate(['/login'])
    })
    .catch(async (error) => {
      await this.presentToast('Error al enviar un correo para reestrablecer la contraseña, por favor vuelva a escribir su email con el que tienes vinculada tu cuenta.');
      console.log(error)      
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

  goBack(){
    this.router.navigateByUrl('/login')
  }
}
