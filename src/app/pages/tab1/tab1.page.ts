import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  date: any;

  constructor(private router: Router) {}

  ngOnInit(){
  }
  goGastos(){
    this.router.navigateByUrl('/gastos')
  }
  goIngresos(){
    this.router.navigateByUrl('/ingresos')
  }
}
