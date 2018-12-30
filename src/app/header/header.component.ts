import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public x = 5;
  public myWidth = 200;
  public myStyleColor = 'brown';
  public myClass = 'red';
  public myColor = 'red';
  public isShow = true;
  public selectedUser;
  public user = {
    name : 'Daniyar',
    surname : 'Myrzakanov',
  };

  public users = [
    {name : 'Данияр'},
    {name : 'Естай'},
    {name : 'Олжас'}
  ];

  random() {
    return Math.random();
  }

  constructor() {
    setTimeout(() => {
      this.myClass = 'green';
      setTimeout(() => {
        this.myClass = 'blue';
      }, 2000);
    }, 2000);
  }

  ngOnInit() {
  }

  changeColor(color) {
    this.myColor = color;
  }

}
