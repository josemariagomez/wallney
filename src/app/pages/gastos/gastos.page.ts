import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GastosModalPage } from '../../modals/gastos-modal/gastos-modal.page';
import { ModalController, ToastController } from '@ionic/angular';
import { InformationModalPage } from 'src/app/modals/information-modal/information-modal.page';
import { EditarGastoPage } from 'src/app/modals/editar-gasto/editar-gasto.page';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {

  items = [];
  currentPage;
  lastPage;

  constructor(
    private router: Router,
    public modalController: ModalController,
    public api: ApiService,
    public toastController: ToastController
    ) {}

  async doInfinite(infiniteScroll) {
    if (this.lastPage != this.currentPage){
      this.addExpenses(this.currentPage + 1);
    }
    infiniteScroll.target.complete();
  }

  async ngOnInit() {
    this.addExpenses();
  }

  async addExpenses(page = null){
    let response = await this.api.getExpenses(page);
    let responseJson = JSON.parse(JSON.stringify(response)).body
    let incomes = responseJson.data;
    if (!page) {
      incomes.forEach(element => {
        this.items.push(element)
      });
    } else {
      this.items = incomes
    }
    this.currentPage = responseJson.current_page;
    this.lastPage = responseJson.last_page;
  }

  goBack(){
    this.router.navigateByUrl('/')
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: GastosModalPage,
      cssClass: 'half-modal'
    });
    modal.onDidDismiss().then((data)=>{
      this.items=[];
      this.addExpenses();
    });
    return await modal.present();
  }
  
  async showInfo(id:any,title:any,description:any,amount:any,date:any){
    console.log(id);
    console.log(description);
    console.log(amount);
    const modal = await this.modalController.create({
      component: InformationModalPage,
      componentProps:{id:id,title:title,description:description,amount:amount,date:date},
      cssClass: 'half-modal'
    });
    return await modal.present();
  }

  async editExpense(id:any,title:any,description:any,amount:any,date:any){
    console.log(id);
    console.log(description);
    console.log(amount);
    const modal = await this.modalController.create({
      component: EditarGastoPage,
      componentProps:{id:id,title:title,description:description,amount:amount,date:date},
      cssClass: 'half-modal'
    });
    modal.onDidDismiss().then((data)=>{
      this.addExpenses();
    });
    return await modal.present();
  }
  
  deleteExpense(id){
    this.api.deleteExpense(id).then(()=>{
      this.presentToast('Se ha borrado su gasto.')
    }).catch((error)=>{
      this.addExpenses();
      this.presentToast(error)
    })
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
