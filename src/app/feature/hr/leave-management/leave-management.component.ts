import { Component, OnInit } from '@angular/core';
import { AllLeave } from 'src/app/core/models/api.model';
import { LeaveService } from 'src/app/core/services/leave.service';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent implements OnInit {
  allLeaves: AllLeave[] = [];

  searchQuery: string = '';
  employeeLeaveOption: boolean = true;
  menuOpen = false;

  constructor(private leaveService: LeaveService) { }

  ngOnInit(): void {
    this.fetchAllLeaves()
  }

  fetchAllLeaves() {
    this.leaveService.fetchAllLeaves().subscribe((res: { status: string, data: [AllLeave] }) => {
      this.allLeaves = res.data;
      return this.allLeaves
    })
  }

  filterLeave() {
    if (this.searchQuery.length === 0) {
      return this.allLeaves
    }
    return this.allLeaves.filter((x) => {
      return x.employee.fullname.toLowerCase().includes(this.searchQuery.toLowerCase()) || x.employee.department.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    })
  }

  selectLeaveOption() {
    this.employeeLeaveOption = !this.employeeLeaveOption;
  }

  leaveStatusUpdate(id: number, status: string) {
    if (status === 'approved') {
      this.leaveService.leaveApproveUpdate(id).subscribe((res) => {
        console.log(res);
        this.fetchAllLeaves()
      })
    } else if (status === 'reject') {
      this.leaveService.leaveRejectUpdate(id).subscribe((res) => {
        console.log(res);
        this.fetchAllLeaves()
      })
    }
  }
}
