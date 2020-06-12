import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.page.html',
  styleUrls: ['./grupo.page.scss'],
})
export class GrupoPage implements OnInit {

  constructor(
    private router: Router,
    public api: ApiService,
    private modalController: ModalController,
    private route: ActivatedRoute
  ) { }

  data;
  items = [];
  id;
  admin;
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getGroup();
  }

  goBack(){
    this.router.navigateByUrl('/tabs/tab2');
  }

  async getGroup(){
    this.api.getGroup(this.id).then((response)=>{
      let responseJson = JSON.parse(JSON.stringify(response)).body;
      this.data = responseJson.group;
      this.items = responseJson.users;
      this.admin = responseJson.admin;

    })
  }

  goEdit(amount,name,id){
    
  }

}
