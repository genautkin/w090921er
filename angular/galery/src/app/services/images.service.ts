import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }
  imagesArray:Card[] =[]
}
