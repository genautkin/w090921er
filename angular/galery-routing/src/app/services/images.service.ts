import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  index =0
  constructor() { 
    this.tryToRestoreImagesFromStorage();
  }
  imagesArray:Card[] = [];
  imagesObservable = new BehaviorSubject<Card[]>(this.imagesArray);


  tryToRestoreImagesFromStorage() {
    const data = localStorage.getItem('imagesArray');
    if (data){
      var tempImagesArray = JSON.parse(data);
      tempImagesArray.forEach((image:any) => this.imagesArray.push(new Card(image.name, image.url, image.id, image.date,image.likes)));
    }
  }
  removeImageById(id:string){
    this.imagesArray = this.imagesArray.filter(image => image.id!== id);
    this.imagesObservable.next(this.imagesArray);
  }

  addImages(array:Card[]){
    this.imagesArray = [...this.imagesArray, ...array];
    this.imagesObservable.next(this.imagesArray);
    localStorage.setItem('imagesArray', JSON.stringify(this.imagesArray));
  }

  getImgById(index:string):string | undefined   {
    if (this.imagesArray[Number(index)]) {
      return this.imagesArray[Number(index)].url;
    }
    return undefined;
  }
}