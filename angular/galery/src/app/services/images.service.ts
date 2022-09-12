import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { 
    console.log('ImagesService')
  }
  imagesArray:Card[] = [];

  removeImageById(id:string){
    console.log(this.imagesArray)
    this.imagesArray = this.imagesArray.filter(image => image.id!== id);
    console.log(this.imagesArray)
  }
}
