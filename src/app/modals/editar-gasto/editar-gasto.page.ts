import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editar-gasto',
  templateUrl: './editar-gasto.page.html',
  styleUrls: ['./editar-gasto.page.scss'],
})
export class EditarGastoPage implements OnInit {

  @Input('id') id;
  @Input('title') title;
  @Input('description') description;
  @Input('amount') amount;
  @Input('title') date;

  constructor(
    private modalCtrl: ModalController
    ){}

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
