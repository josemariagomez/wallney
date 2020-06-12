import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { title } from 'process';

@Component({
  selector: 'app-editar-ingreso',
  templateUrl: './editar-ingreso.page.html',
  styleUrls: ['./editar-ingreso.page.scss'],
})
export class EditarIngresoPage implements OnInit {

  @Input('id') id;
  @Input('title') title;
  @Input('description') description;
  @Input('amount') amount;
  @Input('date') date;

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
  async editIncome(){
    this.api.editIncomes(this.title,this.description,this.amount,this.date,this.id).then(()=>{
      this.dismiss()
    }).catch((error)=>{
      this.presentToast('Fallo al editar, compruebe el formulario.');
    })
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
