import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.page.html',
  styleUrls: ['./meta.page.scss'],
})
export class MetaPage implements OnInit {

  amount: any;

  constructor(
    private modalCtrl: ModalController,
    public api: ApiService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  editarMeta(amount){
    this.api.goal(amount).then(()=>{
      this.dismiss();
    })
    .catch(async (error) => {
      await this.presentToast('Introduce una cantidad');   
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

}
