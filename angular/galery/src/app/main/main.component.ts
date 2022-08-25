import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  imagesArray:any[] =[]

  // :any[] = [];

  ngOnInit(): void {
  }

  addImage(name:HTMLInputElement,url:HTMLInputElement) {
    console.log(name.value)
    console.log(url.value)
    name.value = ''
    url.value = ''
  }

}
