import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  title = "My Todolist";
  cars = ["Saab", "Volvo", "BMW", "Susita"];

  menuItems= ["Home", "About", "Contact", "Contact Info"]

  ngOnInit(): void {
    // setInterval(() => {
    //   this.menuItems.push(this.makeid(5))
    // }, 2000);
  }
  makeid(length:number):string {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
    }
    return result;
}

}
