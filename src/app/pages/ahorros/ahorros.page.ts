import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahorros',
  templateUrl: './ahorros.page.html',
  styleUrls: ['./ahorros.page.scss'],
})
export class AhorrosPage implements OnInit {

  items:[{
      amount: 100,
      date: "Enero - 2020"
    },{
      amount: 200,
      date: "Enero - 2020"
    },{
      amount: 300,
      date: "Enero - 2020"
    },{
      amount: 400,
      date: "Enero - 2020"
    },{
      amount: 500,
      date: "Enero - 2020"
    },{
      amount: 600,
      date: "Enero - 2020"
    }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.items)
  }

  goBack(){
    this.router.navigateByUrl('/')
  }

}
