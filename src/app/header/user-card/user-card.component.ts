import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user2;

  constructor() {
    // console.log('constructor:', this.user2);
  }

  ngOnInit() {
    // console.log('ngOnInit', this.user2);
  }

}
