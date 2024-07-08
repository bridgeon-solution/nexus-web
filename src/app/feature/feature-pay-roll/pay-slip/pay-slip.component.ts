import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-slip',
  templateUrl: './pay-slip.component.html',
  styleUrls: ['./pay-slip.component.css']
})
export class PaySlipComponent implements OnInit {
  payRollOption: boolean = true;
  role: string = localStorage.getItem('role')

  ngOnInit(): void {
    if (this.role === 'HR') {
      this.payRollOption = true;
    } else {
      this.payRollOption = false;
    }
  }

  selectPayRollOption() {
    this.payRollOption = !this.payRollOption
  }
}
