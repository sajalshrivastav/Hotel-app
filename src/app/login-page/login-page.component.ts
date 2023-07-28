import { Component } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
flag=false;
cred: Customer= new Customer();
fetched: Customer= new Customer();

 constructor(private service : HotelsService, private router: Router){}
authenticate(){
  this.service.validate(this.cred).then(resp=> resp.subscribe((data)=> 
  {

    this.fetched= data[0];
    console.log(typeof(this.fetched));
    if(this.cred.email== this.fetched.email){
      console.log("Login successfull");
      this.router.navigate(['/home'])
    }
    else{
      console.log("login failed")
    }
  }
  
  
  ))
}


}
