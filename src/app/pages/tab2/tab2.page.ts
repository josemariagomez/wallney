import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  routerSubscription;

  constructor(
    private router: Router,

  ) {}

  ngOnInit(){
    this.routerWatch();
  }
  
  routerWatch() {
    this.routerSubscription = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if(event instanceof NavigationEnd) {
            //this.data = '';
            //this.getData();
        }
      }
    );
  }
}
