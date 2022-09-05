import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  selectedTab:string = 'images';
  ngOnInit(): void {
  }




  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}
