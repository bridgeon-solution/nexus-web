import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PayRollApiInterface } from 'src/app/core/models/api.model';
import { PayRollService } from 'src/app/core/services/pay-roll.service';

@Component({
  selector: 'app-view-pay-slip',
  templateUrl: './view-pay-slip.component.html',
  styleUrls: ['./view-pay-slip.component.css'],
  animations: [
    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            height: 0,
          }),
          stagger(100, [
            animate('1s ease')
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ViewPaySlipComponent implements OnInit {
  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(private payRollservice: PayRollService) { }
  paySlip: PayRollApiInterface[] = [];

  ngOnInit(): void {
    this.getAllPaySlip()
  }

  getAllPaySlip() {
    this.payRollservice.getPayRoll().subscribe((res: { status: string, data: [PayRollApiInterface] }) => {
      console.log(res.data);
      this.paySlip = res.data;
    })
  }

  // filterPayslips() {
    
  //   if (this.startDate && this.endDate) {
  //     console.log(this.endDate);
  //     this.payRollservice.getPayRollByDate(this.startDate, this.endDate).subscribe((res)=>{
  //       console.log(res);
  //     })
  //   }
  // }
}
