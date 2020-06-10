import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-gastos-modal',
  templateUrl: './gastos-modal.page.html',
  styleUrls: ['./gastos-modal.page.scss'],
})
export class GastosModalPage implements OnInit {

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
  createExpense(){
    this.amount = this.amount * 100;
    console.log(this.date)
    this.api.createExpense(this.title, this.description, this.amount, this.date)
    .then((response) => {
      this.dismiss()
    })
    .catch(async (error) => {
      await this.presentToast(error);   
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
