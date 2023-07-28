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

  hotelDetails: Hotels = new Hotels();

 

  constructor(private route: ActivatedRoute, private service:HotelsService, private router:Router) {

 

    this.hotel=JSON.parse(localStorage.getItem("Hotel")||"");



  }


book(){
this.service.updateBookingDetail(this.hotelBooking)

}
 add(){
  this.service.updateBookingDetail(this.hotelBooking);
 }

 

}