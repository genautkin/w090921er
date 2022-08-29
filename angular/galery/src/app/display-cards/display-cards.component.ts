import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit {

  constructor() { }

  @Input('images') imagesArray:any[] = [];

  ngOnInit(): void {
  }

}
