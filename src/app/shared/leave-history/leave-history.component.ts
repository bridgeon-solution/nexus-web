import { Component, OnInit } from '@angular/core';
import { LeaveData } from 'src/app/core/models/api.model';
import { LeaveService } from 'src/app/core/services/leave.service';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {

  leaveData: LeaveData[] = []

  constructor(private leaveService: LeaveService) { }

  ngOnInit(): void {
    this.fetchLeaves()
  }
  fetchLeaves() {
    this.leaveService.getLeavesById().subscribe((res: { status: string, data: [LeaveData] }) => {
      this.leaveData = res.data;
      console.log(res.data);
      
    })
  }
}
