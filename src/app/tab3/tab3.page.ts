import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private router: Router,
    private storage: Storage
    ) {}

  async logOut(){
    this.storage.set('user', '');
    this.storage.set('token', '');
    this.router.navigateByUrl('/login');
  }

}
