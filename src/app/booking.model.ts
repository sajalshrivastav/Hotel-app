import { Hotels } from "./hotels.model";

export class Bookings{
    public bookingId : number=0;
    public hotels: Hotels[]=[];;
    public roomType: string="";
    public guest: number=0;
    public price: number=0; 
    public checkIn:string="";
    public checkOut:string="";
}