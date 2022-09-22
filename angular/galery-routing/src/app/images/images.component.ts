import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/internal/Subscription';
import { Card } from '../models/card.model';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
    <img [src]="url" class="card-img-top">
    </div>
  `
})
export class NgbdModalContent {
  @Input() url:string = '';

  constructor(public activeModal: NgbActiveModal) {}
}


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit,AfterViewInit,OnDestroy {

  constructor(private http: HttpClient,private imgService:ImagesService,private modalService: NgbModal,
    private _activatedRoute:ActivatedRoute) { }
  API_URL = 'https://picsum.photos/v2/list'
  imagesArray:Card[] = [];
  @ViewChild('url') url!:ElementRef;
  @ViewChild('name') name!:ElementRef;
  myVar = 'dasd'
  // :any[] = [];
  isButtonDisabled=true;
  formData = {url:'example.com', name:'example2'}
  subscribeImages:Subscription | undefined;
  ngOnInit(): void { 
   this.subscribeImages = this.imgService.imagesObservable.subscribe(data => {
      console.log("Got new images");
      this.imagesArray=data}); 
      this.checkImageIndex();
   }

   checkImageIndex() {
    this._activatedRoute.params.subscribe(parameter => {
      const index = parameter['index']
      if (!!index){
        const imgUrl = this.imgService.getImgById(index);
         if (imgUrl) {
          this.open(imgUrl);
         }
      }
    })
   }

   ngAfterViewInit(): void {
   }

   open(url:string) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.url = url;
  }


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
    var tempImagesArray:Card[] =[]
   this.http.get(this.API_URL).subscribe({
    next: (imagesArray:any) => {
      imagesArray.forEach((image:any) => {
        tempImagesArray.push(new Card(image.author,image.download_url))
      })
      this.imgService.addImages(tempImagesArray);
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
    this.subscribeImages?.unsubscribe();
    console.log('ngOnDestroy');
  }

}
