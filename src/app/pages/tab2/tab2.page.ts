import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalController } from '@ionic/angular';
import { AnadirGrupoPage } from 'src/app/modals/anadir-grupo/anadir-grupo.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  routerSubscription;
  noItems = true;
  items = [];

  constructor(
    private router: Router,
    public api: ApiService,
    private modalController: ModalController
  ) {}

  ngOnInit(){
    this.getGroups();
    this.routerWatch();
  }
    
  
  routerWatch() {
    this.routerSubscription = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if(event instanceof NavigationEnd) {
            this.getGroups();
        }
      }
    );
  }

  async getGroups(){
    let response = await this.api.getGroups();
    let groups = JSON.parse(JSON.stringify(response)).body
    this.items = groups
    if(groups.length <= 0){
      this.noItems = true;
    }else{
      this.noItems = false;
    }
    console.log(groups);
    console.log(this.items);
  }

  async addGroup(){
    const modal = await this.modalController.create({
      component: AnadirGrupoPage,
      cssClass: 'half-modal'
    });
    modal.onDidDismiss().then((data)=>{
      this.items=[];
      this.getGroups();
    });
    return await modal.present();
  }
  goGroup(){
    this.router.navigateByUrl('/grupo')
  }
}
