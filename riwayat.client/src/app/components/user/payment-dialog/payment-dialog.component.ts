import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent implements OnInit {
  @ViewChild('razorpayContainer1', { static: true }) razorpayContainer1!: ElementRef;
  @ViewChild('razorpayContainer2', { static: true }) razorpayContainer2!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private dialogRef: MatDialogRef<PaymentDialogComponent>
  ) {}

  ngOnInit(): void {
    const script1 = this.renderer.createElement('script');
    script1.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script1.setAttribute('data-payment_button_id', 'pl_PFzNzUeg5rTQaR');
    script1.async = true;
    this.renderer.appendChild(this.razorpayContainer1.nativeElement, script1);

    const script2 = this.renderer.createElement('script');
    script2.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script2.setAttribute('data-payment_button_id', 'pl_PG6trUIDwTbIOD');
    script2.async = true;
    this.renderer.appendChild(this.razorpayContainer2.nativeElement, script2);
  }

  redirectSuccess(): void {
    this.dialogRef.close();  // Close the dialog
    this.router.navigate(['/paysuccess']);  // Navigate to success page
  }
}
