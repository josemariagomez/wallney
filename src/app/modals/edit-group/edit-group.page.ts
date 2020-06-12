import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.page.html',
  styleUrls: ['./edit-group.page.scss'],
})
export class EditGroupPage implements OnInit {

  @Input('id') id;
  @Input('amount') amount;
  @Input('title') name;

  constructor() { }

  ngOnInit() {
  }

}
