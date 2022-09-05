import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor() { }
  imagesArray:Card[] =[]
  @ViewChild('url') url!:ElementRef;
  @ViewChild('name') name!:ElementRef;
  myVar = 'dasd'
  // :any[] = [];
  isButtonDisabled=true;
  formData = {url:'example.com', name:'example2'}
  ngOnInit(): void { 
   }

  // addImage(name:HTMLInputElement,url:HTMLInputElement) {
  //   console.log(this.url.nativeElement.value);
  //   console.log(this.name.nativeElement.value)
  //   this.imagesArray.push(new Card(this.formData.value,url.value));
  //   name.value = ''
  //   url.value = ''
  //   console.log(this.formData)
  // }

  addImage() {
    this.imagesArray.push(new Card(this.formData.name,this.formData.url));
    this.formData.name = ''
    this.formData.url = ''
  }

  onInput(element:HTMLInputElement) {
    if (element.value.length < 3) {
      element.classList.add("border-danger")
    } 
    else {
      element.classList.remove("border-danger")
    }
    if (this.url.nativeElement.value.length >= 3 &&
       this.name.nativeElement.value.length >= 3){
      this.isButtonDisabled=false;
    }
    else{
      this.isButtonDisabled=true;
    }
  }


}
