import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  observable: any;

  constructor() { }

  ngOnInit(): void {
    this.setObservable()
    this.subscribeToObser()
  }

  subscribeToObser() {
    const sub1 = this.observable.subscribe((value:any) => {
      console.log(value);
      if (value === 5) {
        sub1.unsubscribe();
      }
    },
    (error:any) => console.log(error),
    ()=> {
      console.log('No errors and complete')
    })


    const sub2 = this.observable.subscribe((value:any) => {
      console.log(value);
      if (value === 99) {
        sub2.unsubscribe();
      }
    },
    (error:any) =>{},
    ()=> console.log('No errors and complete subscribe num 2'));
    // setTimeout(() => {
    //   sub1.unsubscribe();
    // }, 3000);
    // setTimeout(() => {
    //   sub2.unsubscribe();
    // }, 10000);
  }

  setObservable(){
    this.observable = 
    new Observable((observer) => {
      let i = 0;
      setInterval(() => {
        observer.next(i++);
        // if (i===5) {
        //   observer.error(new Error('should not be called'));
        // }
      },1000);
      setTimeout(() => {
        observer.complete();
      }, 10000);
    });
  }

}
