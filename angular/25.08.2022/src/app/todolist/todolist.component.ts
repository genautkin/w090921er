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
    
  }

}
