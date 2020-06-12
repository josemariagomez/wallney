import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { IngresosModalPage } from '../../modals/ingresos-modal/ingresos-modal.page';
import { ApiService } from 'src/app/services/api.service';
import { EditarGastoPage } from 'src/app/modals/editar-gasto/editar-gasto.page';
import { EditarIngresoPage } from 'src/app/modals/editar-ingreso/editar-ingreso.page';
import { InformationModalPage } from 'src/app/modals/information-modal/information-modal.page';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {

  items = [];
  currentPage;
  lastPage;
  data;

  constructor(
    private router: Router,
    public modalController: ModalController,
    public api: ApiService,
    private toastController: ToastController
    ) {}

  async ngOnInit() {
    this.addIncomes()
  }

  async doInfinite(infiniteScroll) {
    if (this.lastPage != this.currentPage){
      this.addIncomes(this.currentPage + 1);
    }
    infiniteScroll.target.complete();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: IngresosModalPage,
      cssClass: 'half-modal'
    });
    modal.onDidDismiss().then((data)=>{
      this.items=[];
      this.addIncomes();
    });
    return await modal.present();
  }

  async editIncome(id:any,title:any,description:any,amount:any,date:any){
    const modal = await this.modalController.create({
      component: EditarIngresoPage,
      componentProps:{id:id,title:title,description:description,amount:amount,date:date},
      cssClass: 'half-modal'
    });modal.onDidDismiss().then((data)=>{
      this.items=[];
      this.addIncomes();
    });
    return await modal.present();
  }

  async addIncomes(page = null){
    let response = await this.api.getIncomes(page);
    let responseJson = JSON.parse(JSON.stringify(response)).body
    let incomes = responseJson.data.data;
    this.data = responseJson;
    console.log("data");
    
    console.log(responseJson);
    
    if (!page) {
      incomes.forEach(element => {
        this.items.push(element)
      });
    } else {
      this.items = incomes
    }
    this.currentPage = responseJson.data.current_page;
    this.lastPage = responseJson.data.last_page;
  }

  goBack(){
    this.router.navigateByUrl('/')
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

  async showInfo(id:any,title:any,description:any,amount:any,date:any){
    const modal = await this.modalController.create({
      component: InformationModalPage,
      componentProps:{id:id,title:title,description:description,amount:amount,date:date},
      cssClass: 'half2-modal'
    });
    return await modal.present();
  }

  deleteIncome(id){
    this.api.deleteIncomes(id).then(()=>{
      this.presentToast('Se ha borrado su ingreso.');
      this.items=[];
      this.addIncomes();
    }).catch(()=>{
      this.presentToast('Error al borrar')
    })
  }
}
