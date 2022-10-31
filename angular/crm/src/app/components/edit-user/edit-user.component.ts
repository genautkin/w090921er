import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private cs: CustomerService) { }

  customer: Customer = new Customer();

  ngOnInit(): void {
  }

  save() {
    if (this.customer.firstName.length < 3) {
      this.error("First name must be at least 3 characters long");
      return;
    }
    if (this.customer.lastName.length < 3) {
      this.error("Last name must be at least 3 characters long");
      return;
    }
    if (this.customer.email.length < 3) { 
      this.error("Email must be at least 3 characters long");
      return;
    }
    this.cs.createCustomer(this.customer).then(()=>{
      this.customer = new Customer();
      Swal.fire({
        title:'Customer created successfully',
        timer: 1500
      }
      )
    }).catch((error) => {
      this.error(error.message);
    });
  }

  error(message: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: message,
      showConfirmButton: false,
      timer: 5000
    })
  }

}
