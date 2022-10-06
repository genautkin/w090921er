import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-test-firebase',
  templateUrl: './test-firebase.component.html',
  styleUrls: ['./test-firebase.component.css']
})
export class TestFirebaseComponent implements OnInit,OnDestroy {
  unsubscribeToCollection:any;


  constructor(private afs: AngularFirestore) { }
  ngOnDestroy(): void {
    this.unsubscribeToCollection()
  }
  users:any = []


  async ngOnInit(): Promise<void> {
    //this.createDocumentByFullPath('test/testDocument5',{firstName: 'John2', lastName: 'Doe', age: 30})
    //const data = await this.readDocument('test/testDocument2');
    //this.getAllDocumentsFromCollection('test');
    this.getCollectionInRealTime('test');
  }

  createDocumentByCollectionAndDocumentName(): void {
    this.afs.collection('test').doc('testDocument2').set({firstName: 'John', lastName: 'Doe', age: 30}).then((success) => console.log(success))
    .catch((error) => console.error(error));
  }

  createDocumentByFullPath(pathToDocument:string,data:any,merge:boolean=true): void {
    this.afs.doc(pathToDocument).set(data,{merge:merge}).then((success) => console.log(success))
    .catch((error) => console.error(error));
  }

  async readDocument(pathToDocument:string) {
    try {
      const doc = await this.afs.doc(pathToDocument).ref.get();
      if (doc.exists) {
        return doc.data();
      }
      return null;
    }
    catch (error) {
      console.error(error);
    }
  }

  getAllDocumentsFromCollection(collection: string) {
     this.afs.collection(collection).ref.where("age","==",30).where("firstName","==",'John2').get().then((documents) => {
      documents.forEach((doc) => {
        console.log(doc.data());
      })
     })
     .catch((error) => console.error(error));
  }


  getCollectionInRealTime(collection: string) { 
    this.unsubscribeToCollection = this.afs.collection(collection).ref.where("age","==",30).onSnapshot((documents) => {
      this.users = [];
      documents.forEach((doc) => {
        this.users.push(doc.data());
        console.log(doc.data());
      })
     },error => console.error(error))
  }





}
