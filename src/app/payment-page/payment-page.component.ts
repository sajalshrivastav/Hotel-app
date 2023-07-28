import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {

  cardNumber: string = '';

  phoneNumber: string = '';

  cvv: string = '';

  expiryDate: string = '';

  successMessage: string = '';

  errorMessage: string = '';

  displayMessage(): void {

    if (this.cardNumber && this.phoneNumber && this.cvv && this.expiryDate)

      { this.successMessage = `Thank you for providing your details.`;

        this.errorMessage = ''; }

        else { this.errorMessage = 'Please fill all the fields.';

        this.successMessage = '';

    }

  }

}
