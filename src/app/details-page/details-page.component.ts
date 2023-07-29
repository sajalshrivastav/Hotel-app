import { Component,OnInit } from '@angular/core';

import { Hotels } from '../hotels.model';

import { ActivatedRoute, Router } from '@angular/router';

import { HotelsService } from '../services/hotels.service';
import { Customer } from '../customer.model';
import { Bookings } from '../booking.model';

 

@Component({

  selector: 'app-details-page',

  templateUrl: './details-page.component.html',

  styleUrls: ['./details-page.component.css']

})

export class DetailsPageComponent {
  hotel :Hotels = new Hotels();
  hotelBooking : Customer = new Customer();
booking: Bookings[]=[];
logggedInUser: Customer= new Customer();

selectedOffer: string = '';
cardDetails: any = {};

  hotelDetails: Hotels = new Hotels();

 

  constructor(private route: ActivatedRoute, private service:HotelsService, private router:Router) {

 

    this.hotel=JSON.parse(localStorage.getItem("Hotel")||"");



  }

ngOnInit(){
  this.hotelBooking.bookings.push(new Bookings());
  this.hotelBooking.bookings[0].bookingId = this.hotel.hotelId;

  console.log(this.hotelBooking);
}


// book(){
// this.service.updateBookingDetail(this.hotelBooking)

// }
 add(){
  this.service.updateBookingDetail(this.hotelBooking);
 }

 
 book(): void {
  
  const totalPrice = this.calculateTotalPrice();

  this.hotelBooking.bookings[0].price = totalPrice;
  this.service.customerRegister(this.hotelBooking);
  this.router.navigate(['/bookings']);

  this.hotelBooking.customerId = this.logggedInUser.customerId;
    this.hotelBooking.customerName = this.logggedInUser.customerName;
    this.hotelBooking.mobile = this.logggedInUser.mobile;
    this.hotelBooking.email = this.logggedInUser.email;
}

calculateTotalPrice(): number {
  let totalPrice = 0;
 
  totalPrice = this.hotelBooking.bookings[0].price  * 100; 
  return totalPrice;
}
isUserLoggedIn:boolean=true;

}

