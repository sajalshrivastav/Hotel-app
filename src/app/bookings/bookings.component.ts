import { Component } from '@angular/core';
import { Bookings } from '../booking.model';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  customer:Customer=new Customer();
  custId:number=101;
  custBookings:Bookings[]=[];
  constructor(private service:HotelsService,private router:Router){}

  ngOnInit(): void {
    this.service.listBooking(this.custId).subscribe(
      (data) => {
        this.customer = data;
        this.custBookings = this.customer.bookings;
        console.log(this.customer);
        console.log(this.custBookings); // Check the custBookings array.
      },
      (error) => {
        console.error('Error fetching customer booking details:', error);
      }
    );
  }
  

}
