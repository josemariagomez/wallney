import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user = {
    name: '',
    username: '',
    email: '',
  };

  constructor(
    private router: Router,
    private storage: Storage
  ) {}

  async ngOnInit(){
    let user = await this.storage.get('user') 
    console.log(user);
    
    this.user = user;
  }

  async logOut(){
    this.storage.set('user', '');
    this.storage.set('token', '');
    this.router.navigateByUrl('/login');
  }
  update(){
    console.log('No ha sido implementado aún')
  }

}
