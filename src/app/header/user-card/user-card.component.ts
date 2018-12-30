import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user2;
  @Output() userSelected: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('constructor:', this.user2);
  }

  ngOnInit() {
    console.log('ngOnInit', this.user2);
  }


  selectUser(){
    this.userSelected.emit();
  }

}
