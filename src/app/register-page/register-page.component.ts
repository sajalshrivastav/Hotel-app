import { Component } from '@angular/core';
import { Customer } from '../customer.model';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  customer: Customer = new Customer();

 

  constructor(private service:HotelsService, private router: Router){}

 

  save(){

    this.service.customerRegister(this.customer);

    this.router.navigate(["/login-page"]);

  }

}
