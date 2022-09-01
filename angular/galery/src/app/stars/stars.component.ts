import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() starsCounter = 5;
  @Input() volume = 0;
  mouseOverItemIndex = 0;
  @Output() onItemSelected=new EventEmitter<number>();

  constructor() { }
  ngOnInit(): void {
  }

  setLikes(likes: number) {
    this.onItemSelected.emit(likes);
  }

}
