import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  imagesArray:Card[] =[]
  selectedTab:string = 'images';
  @ViewChild('url') url!:ElementRef;
  @ViewChild('name') name!:ElementRef;
  myVar = 'dasd'
  // :any[] = [];
  isButtonDisabled=true;
  ngOnInit(): void {
    // setTimeout(() => this.name.nativeElement.value = "Nuuuuuuuu!!!!",3000);
  }

  addImage(name:HTMLInputElement,url:HTMLInputElement) {
    console.log(this.url.nativeElement.value);
    console.log(this.name.nativeElement.value)
    this.imagesArray.push(new Card(name.value,url.value));
    name.value = ''
    url.value = ''
  }

  onInput(){
    if (this.url.nativeElement.value.length >= 3 &&
       this.name.nativeElement.value.length >= 3){
      this.isButtonDisabled=false;
    }
    else{
      this.isButtonDisabled=true;
    }
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}
