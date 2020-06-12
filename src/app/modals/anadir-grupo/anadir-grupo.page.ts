import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-anadir-grupo',
  templateUrl: './anadir-grupo.page.html',
  styleUrls: ['./anadir-grupo.page.scss'],
})
export class AnadirGrupoPage implements OnInit {

  name;
  percent;
  amount;
  uuid;

  constructor(
    public api: ApiService,
    private modalCtrl: ModalController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  createGroup(){
    this.amount = this.amount * 100;
    this.api.createGroup(this.name,this.percent,this.amount)
    .then((response) => {
      this.dismiss()
    })
    .catch(async (error) => {
      await this.presentToast(error);   
    });
  }

  joinGroup(){

  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 3000
    });
    toast.present();
  }
}
