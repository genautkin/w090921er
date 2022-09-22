import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit {

  constructor(private route: Router) { }

  @Input('images') imagesArray:Card[] = [];
  color = 'yellow';
  myStyle = {color: 'white', 'background-color': 'blue'}
  fontSize = '60 px';
  isBorder = true;
  ngOnInit(): void {
    setTimeout(() =>this.myStyle['background-color'] = 'red',3000)
  }

  apply(color: string,size:string) {
    this.color = color;
    this.fontSize = size;
  }
  imageClick(index: number){
    this.route.navigate(['/images',index]);
  }
}
