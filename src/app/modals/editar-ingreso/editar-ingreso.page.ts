import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
  @Input('title') date;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
