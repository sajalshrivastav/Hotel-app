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


selectedOffer: string = '';
cardDetails: any = {};

  hotelDetails: Hotels = new Hotels();

 

  constructor(private route: ActivatedRoute, private service:HotelsService, private router:Router) {

 

    this.hotel=JSON.parse(localStorage.getItem("Hotel")||"");



  }

ngOnInit(){
  this.hotelBooking.bookings.push(new Bookings());
  this.hotelBooking.bookings[0].bookingId = this.hotel.hotelId;
}


// book(){
// this.service.updateBookingDetail(this.hotelBooking)

// }
 add(){
  this.service.updateBookingDetail(this.hotelBooking);
 }

 
 book(): void {
  // Calculate the total price based on the selected offer and booking details.
  const totalPrice = this.calculateTotalPrice();

  // Save the booking details to the customer object.
  this.hotelBooking.bookings[0].price = totalPrice;

  // Save the customer and booking details using the service.
  this.service.customerRegister(this.hotelBooking);

  // Assuming confirmation page URL is '/confirmation', redirect after successful booking.
  this.router.navigate(['/confirmation']);
}

calculateTotalPrice(): number {
  // Implement logic to calculate the total price based on booking details and selected offer.
  // You can access the booking details using this.hotelBooking and the selected offer using this.selectedOffer.
  // Return the calculated total price.
  // For example:
  let totalPrice = 0;
  // Calculate the total price based on guest count, room type, etc.
  // Apply any discounts or offers if applicable.
  // Example:
  totalPrice = this.hotelBooking.bookings[0].price * 100; // Assuming 100 USD per guest per night.
  return totalPrice;
}
}

