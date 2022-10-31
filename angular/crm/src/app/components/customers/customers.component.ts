import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit,OnDestroy {
  subscribe: any;
  customers: Customer[] = [];
  customersToShow: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
   this.subscribe = this.customerService.customerSubject.subscribe(data => {
    this.customers = data;
    this.search("");
   })
  }

  search(value: string) {
    value = value.toLowerCase();
    this.customersToShow = this.customers.filter(c => c.firstName.toLowerCase().includes(value) || 
    c.lastName.toLowerCase().includes(value) ||
    c.address.toLowerCase().includes(value) ||
    c.email.toLowerCase().includes(value) ||
    c.phoneNumber.toLowerCase().includes(value) )
  }

  ngOnDestroy(): void {
    this.subscribe ? this.subscribe.unsubscribe() : null;
  } 

}
