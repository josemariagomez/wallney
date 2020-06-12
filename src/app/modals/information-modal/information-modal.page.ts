import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-information-modal',
  templateUrl: './information-modal.page.html',
  styleUrls: ['./information-modal.page.scss'],
})
export class InformationModalPage implements OnInit {

  @Input('id') id;
  @Input('title') title;
  @Input('description') description;
  @Input('amount') amount;
  @Input('title') date;

  constructor() { }

  ngOnInit() {
    this.date = new Date(this.date).toLocaleDateString('es')
  }
}
