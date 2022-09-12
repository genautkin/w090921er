import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Card } from '../models/card.model';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit,AfterViewInit,OnDestroy {

  constructor(private http: HttpClient,private imgService:ImagesService) { }
  API_URL = 'https://picsum.photos/v2/list'
  imagesArray:Card[] = this.imgService.imagesArray;
  @ViewChild('url') url!:ElementRef;
  @ViewChild('name') name!:ElementRef;
  myVar = 'dasd'
  // :any[] = [];
  isButtonDisabled=true;
  formData = {url:'example.com', name:'example2'}
  ngOnInit(): void { 
    console.log("ngOnInit")
    console.log(this.url)
   }

   ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    console.log(this.url)
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
    this.imgService.imagesArray.push(new Card(this.formData.name,this.formData.url));
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

  addRandomImages() {
   this.http.get(this.API_URL).subscribe({
    next: (imagesArray:any) => {
      imagesArray.forEach((image:any) => 
      this.imgService.imagesArray.push(new Card(image.author,image.download_url)))
    },
    error: (e) => console.error(e),
    complete: () => console.info('complete') 
})
  }

  post() {
    const myHeaders = new HttpHeaders({'Content-Type': 'application/json' });
    this.http.post('https://dummyjson.com/products/add',JSON.stringify({
      name: "this.formData.name",
      url: "this.formData.url",
      description: "Test"
    }),{headers: myHeaders}).subscribe(data => console.log(data));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
