import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { EditGroupPage } from 'src/app/modals/edit-group/edit-group.page';

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
    private route: ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController
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
      console.log(responseJson);
      
    })
  }

  async goEdit(amount,name,id){
    const modal = await this.modalController.create({
      component: EditGroupPage,
      componentProps:{amount:amount,name:name,id:id},
      cssClass: 'half2-modal'
    });
    modal.onDidDismiss().then((data)=>{
      this.items =[];
      this.getGroup();
    });
  }

  deleteGroup(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Seguro que desea borrar el grupo?',
      message: 'Perderas todo los datos, tanto tu como los participantes del grupo.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Borrar',
          handler: () => {
            this.api.deleteGroup(this.id).then(()=>{
              this.items=[];
              this.getGroup();
              this.presentToast('Se ha eliminado el grupo correctamente.');
              this.router.navigateByUrl('/tabs/tab2')
            }).catch(()=>{
              this.presentToast('No se ha podido eliminar, error con el servidor.')
            })
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 3000
    });
    toast.present();
  }
}
