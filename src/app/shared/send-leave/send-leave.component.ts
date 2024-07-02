import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LeaveData } from 'src/app/core/models/api.model';
import { LeaveService } from 'src/app/core/services/leave.service';

@Component({
  selector: 'app-send-leave',
  templateUrl: './send-leave.component.html',
  styleUrls: ['./send-leave.component.css'],
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})

export class SendLeaveComponent implements OnInit {
  @ViewChild('leaveform') leaveFrom: NgForm;
  disableSelect = new FormControl();

  selectedLeaveType: string = '';
  startDate: string | null = null;
  endDate: string | null = null;
  days: number | null = 0;

  constructor(private leaveService: LeaveService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  calculateDateDifference(event: MatDatepickerInputEvent<Date>): void {
    const data: LeaveData = this.leaveFrom.value;
    const sDate = new Date(data.startDate);
    const eDate = new Date(data.endDate);
    const timeDifference: number = Math.abs(sDate.getTime() - eDate.getTime());
    this.days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  }

  leaveSubmit() {
    const leaveValues: LeaveData = this.leaveFrom.value;
    leaveValues.leaveType = this.selectedLeaveType;
    this.leaveService.leaveSubmit(leaveValues).subscribe((res: { status: string }) => {
      this.leaveFrom.reset()
      this.snackBar.open(res.status, 'Close', { duration: 5000 });
    }, (err) => {
      console.log(err);
    })
  }
}
