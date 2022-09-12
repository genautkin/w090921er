import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private imgSer: ImagesService) { }

  @Input() card!: Card;
  ngOnInit(): void {
  }

  formatDate(d:Date): string {
    return ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
  }

  removeCard() {
    this.imgSer.removeImageById(this.card.id);
  }

}
