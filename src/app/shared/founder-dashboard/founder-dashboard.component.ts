import { Component, Input, OnInit } from '@angular/core';
import { AllLeave } from 'src/app/core/models/api.model';
import { LeaveService } from 'src/app/core/services/leave.service';

@Component({
  selector: 'app-founder-dashboard',
  templateUrl: './founder-dashboard.component.html',
  styleUrls: ['./founder-dashboard.component.css']
})
export class FounderDashboardComponent implements OnInit {
  @Input() dashboardDatas;
  allLeaves: AllLeave[] = [];

  constructor(private leaveService: LeaveService) { }

  ngOnInit(): void {
    this.fetchLeave();
    this.filterLeavesForToday()
  }

  fetchLeave() {
    const today: string = new Date().toISOString().split('T')[0];
    this.leaveService.fetchAllLeaves().subscribe((res: { status: string, data: AllLeave[] }) => {
      console.log(res);
      
      this.allLeaves = res.data;

      this.allLeaves = this.allLeaves.filter((x) => {
        if (x.leaveData.status === "Approved") {
          const startDate = new Date(x.leaveData.startDate).toISOString().split('T')[0];
          const endDate = new Date(x.leaveData.endDate).toISOString().split('T')[0];
          return startDate <= today && endDate >= today;
        }
        return ''
      })

    }, (err) => {
      console.log(err);
    })
  }

  filterLeavesForToday() {
    const today: string = new Date().toISOString().split('T')[0];
    // console.log(this.allLeaves);

  }

  founderColor(option: string) {
    switch (option) {
      case 'Departments':
        return '#6D81ED';
      case 'Projects':
        return '#003E77';
      case 'Salary':
        return '#00770C';
      case 'Leaves':
        return '#AA3B2C';
      default:
        return 'gray'; // Default color for unknown heads
    }
  }

  founderInfoColor(option: string) {
    switch (option) {
      case 'Departments':
        return '#6D81ED';
      case 'Projects':
        return '#232B58';
      case 'Salary':
        return '#166622';
      case 'Leaves':
        return '#84533E';
      default:
        return 'gray'; // Default color for unknown heads
    }
  }
}
