import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { Customer, UserStatus } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 

  unsubscribe:any = null;

  constructor(private afs:AngularFirestore) {
    this.subscribeToCustomersCollection();
   }

  customerCollection:string = 'customers';
  customers: Customer[] = [];
  customerSubject = new BehaviorSubject<Customer[]>(this.customers)

  createCustomer(customer: Customer) {
      const pathToDocument = this.customerCollection+'/'+ customer.id
      return this.afs.doc(pathToDocument).set(customer.toFirebase())
  }

  subscribeToCustomersCollection(status:UserStatus = 1)  {
    if (this.unsubscribe !== null) {
      return;
      //I already subscribe to customer collection can exist
    }
    this.unsubscribe = this.afs.collection(this.customerCollection).ref.where('status','==',status).onSnapshot((documents) => {
      this.customers = [];
      documents.forEach((doc) => {
        this.customers.push(Customer.fromFirebaseToClass(doc.data()));
      })

      this.customerSubject.next(this.customers);
     },error => console.error(error))
  }
  removeCustomerById(id: number) {
    return this.afs.doc(this.customerCollection+"/"+id).set({status:0},{merge:true})
  }

  


  
}
