import { Component, OnInit } from '@angular/core';

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

  constructor() {
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

}
