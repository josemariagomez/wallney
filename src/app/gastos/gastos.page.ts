import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {

  items = [];
  item = {
    money: '14,30',
    desc: 'Burger king con Clara'
  };

  constructor() {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.item );
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    let item = {
      money: '14,30',
      desc: 'Burger king con Clara'
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
