import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  imagesArray:Card[] =[]

  // :any[] = [];

  ngOnInit(): void {
  }

  addImage(name:HTMLInputElement,url:HTMLInputElement) {
    console.log(name.value)
    console.log(url.value)
    this.imagesArray.push(new Card(name.value,url.value));
    name.value = ''
    url.value = ''
  }

}
