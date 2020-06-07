import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IngresosModalPage } from '../../modals/ingresos-modal/ingresos-modal.page';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {

  items = [];
  item = {
    money: '33,40',
    desc: 'Entrada WBF devuelta'
  };

  constructor(
    private router: Router,
    public modalController: ModalController
    ) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.item );
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    let item = {
      money: '33,40',
      desc: 'Entrada WBF devuelta'
    };
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( item );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: IngresosModalPage,
      cssClass: 'half-modal'
    });
    return await modal.present();
  }

  goBack(){
    this.router.navigateByUrl('/')
  }
}
