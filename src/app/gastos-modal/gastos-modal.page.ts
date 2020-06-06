import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gastos-modal',
  templateUrl: './gastos-modal.page.html',
  styleUrls: ['./gastos-modal.page.scss'],
})
export class GastosModalPage implements OnInit {

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
