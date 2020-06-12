import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ingresos-modal',
  templateUrl: './ingresos-modal.page.html',
  styleUrls: ['./ingresos-modal.page.scss'],
})
export class IngresosModalPage implements OnInit {

  date: String = new Date().toISOString();
  title: any;
  description: any;
  amount: any;

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
  createIncome(){
    this.amount = this.amount * 100;
    this.api.createIncomes(this.title, this.description, this.amount, this.date)
    .then((response) => {
      this.dismiss()
    })
    .catch(async (error) => {
      await this.presentToast('Fallo al crear un ingreso, compruebe el formulario.');   
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
