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
  items = [];
  data;
  constructor(
    private router: Router,
    public api: ApiService,
    private modalController: ModalController
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
            //infiniteScroll.target.complete();
        }
      }
    );
  }

  /*async getMoths(){
    let response = await this.api.getExpenses(page);
    let responseJson = JSON.parse(JSON.stringify(response)).body
    let items = responseJson.data.data;
    this.data = responseJson
    items.forEach(element => {
        this.items.push(element)
      });
  }*/

  async addGroup(){
    const modal = await this.modalController.create({
      component: AnadirGrupoPage,
      cssClass: 'half-modal'
    });
    modal.onDidDismiss().then((data)=>{
      //this.items=[];
      //this.getMoths();
    });
    return await modal.present();
  }
  goGroup(){
    this.router.navigateByUrl('/grupo')
  }
}
