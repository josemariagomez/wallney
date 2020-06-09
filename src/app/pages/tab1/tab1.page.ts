import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data;
  routerSubscription;

  constructor(private router: Router, public api: ApiService) {}

  async ngOnInit(){
    this.routerWatch()
    this.getData();
  }
  routerWatch() {
    this.routerSubscription = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if(event instanceof NavigationEnd) {
            this.data = '';
            this.getData();
        }
      }
    );
  }

  ionPageWillLeave() {
      this.routerSubscription.unsubscribe();
  }
  
  async getData() {
    this.api.getMainData().then((data) => {
      console.log(data)
      this.data = JSON.parse(JSON.stringify(data)).body;
      console.log(this.data);
    });
  }
  goGastos(){
    this.router.navigateByUrl('/gastos')
  }
  goIngresos(){
    this.router.navigateByUrl('/ingresos')
  }
}
