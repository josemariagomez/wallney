import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'
import { ModalController, ToastController } from '@ionic/angular';
import { MetaPage } from 'src/app/modals/meta/meta.page';
import { ApiService } from 'src/app/services/api.service';
import { EmailValidator } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user;
  data;

  constructor(
    private router: Router,
    private storage: Storage,
    public modalController: ModalController,
    public api: ApiService,
    private toastController: ToastController
  ) {}

  async ngOnInit(){
    let user = await this.storage.get('user') 
    this.user = user;

    this.getData();
  }

  getData(){
    this.api.getProfile().then((data) => {
      this.data = JSON.parse(JSON.stringify(data)).body
    });
  }

  async logOut(){
    this.storage.set('user', '');
    this.storage.set('token', '');
    this.router.navigateByUrl('/login');
  }
  update(){
    console.log('No ha sido implementado aún')
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: MetaPage,
      cssClass: 'half-modal'
    });
    modal.onDidDismiss().then((data)=>{
      this.getData();
    });
    return await modal.present();
  }
  
  async goReset(){
    let user = await this.storage.get('user')
    this.api.resetpassword(user.email).then(()=>{
      this.presentToast('Se ha enviado un email de cambio de contraseña. Mira tu bandeja de entrada')
    }).catch(()=>{
      this.presentToast('Ya hemos enviado un correo de cambio de contraseña. Por favor espere, revise la carpeta de spam')
    })
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 4000
    });
    toast.present();
  }
}
