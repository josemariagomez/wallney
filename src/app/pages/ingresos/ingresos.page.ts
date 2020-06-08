import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { IngresosModalPage } from '../../modals/ingresos-modal/ingresos-modal.page';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {

  items = [];
  currentPage;
  lastPage;

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
      this.items = [];
      this.addIncomes();
    });
    return await modal.present();
  }

  async addIncomes(page = null){
    let response = await this.api.getIncomes(page);
    let responseJson = JSON.parse(JSON.stringify(response)).body
    let incomes = responseJson.data;
    incomes.forEach(element => {
      this.items.push(element)
    });
    this.currentPage = responseJson.current_page;
    this.lastPage = responseJson.last_page;
  }

  goBack(){
    this.router.navigateByUrl('/')
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
