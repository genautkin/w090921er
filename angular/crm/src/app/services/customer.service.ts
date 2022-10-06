import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private afs:AngularFirestore) { }

  createCustomer(customer: Customer) {
      const pathToDocument = 'customers/' + customer.id
      return this.afs.doc(pathToDocument).set(customer.toFirebase())
  }

  
}
