import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-modal',
  templateUrl: './information-modal.page.html',
  styleUrls: ['./information-modal.page.scss'],
})
export class InformationModalPage implements OnInit {

  title: any;
  description: any;
  amount: any;
  date:any;

  constructor() { }

  ngOnInit() {
    
  }

}
