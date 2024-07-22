import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AllLeave, Department } from 'src/app/core/models/api.model';
import { DepartmentService } from 'src/app/core/services/department.service';
import { LeaveService } from 'src/app/core/services/leave.service';
import { ConfirmationModalComponent } from 'src/app/shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent implements OnInit {
  disableSelect = new FormControl();

  allLeaves: AllLeave[] = [];
  leavesHistory: AllLeave[] = [];
  departmnents: Department[] = [];

  searchQuery: string = '';
  selectedDepartment: string = '';
  selectedStatus: string = '';
  employeeLeaveOption: boolean = false;
  loading: boolean = true;
  menuOpen = false;

  constructor(private leaveService: LeaveService, private departmentService: DepartmentService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.fetchAllLeaves();
    this.fetchDepartments();
    this.selectLeaveOption();
  }

  fetchAllLeaves() {
    this.leaveService.fetchAllLeaves().subscribe((res: { status: string, data: [AllLeave] }) => {
      this.allLeaves = res.data.filter((x) => { return x.leaveData.status === 'Pending' });
      this.loading = false;
      console.log(res);
      return this.allLeaves
    })
  }

  fetchDepartments() {
    this.departmentService.getAllDepartments().subscribe((res: { status: string, data: [Department] }) => {
      this.departmnents = res.data;
      this.departmnents.push({ name: 'All', id: 0 })
    })
  }

  filterLeave() {
    if (this.selectedDepartment.length === 0) {
      return this.allLeaves.filter((x) => { return x.leaveData.status === 'Pending' })
    }
    this.loading = false;
    return this.allLeaves.filter((x) => {
      return x.employee.department.name === this.selectedDepartment
      // return x.employee.fullname.toLowerCase().includes(this.searchQuery.toLowerCase()) || x.employee.department.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    })

  }

  filterLeaveHistory() {
    if (this.selectedStatus.length === 0 || this.selectedStatus === 'All') {
      return this.leavesHistory
    }
    return this.leavesHistory.filter((x) => { return x.leaveData.status === this.selectedStatus })
  }

  selectLeaveOption() {
    this.employeeLeaveOption = !this.employeeLeaveOption;
    if (!this.employeeLeaveOption) {
      this.leaveService.fetchAllLeaves().subscribe((res: { status: string, data: [AllLeave] }) => {
        this.leavesHistory = res.data.filter((x) => { return x.leaveData.status !== 'Pending' })
      })

    }
  }

  leaveStatusUpdate(id: string, status: string) {
    const confirmationModal = this.dialogRef.open(ConfirmationModalComponent, {
      data: { leaveStatus: status, id }
    })
    confirmationModal.afterClosed().subscribe((res) => {
      console.log(res);
      if (res) {
        this.allLeaves = this.allLeaves.filter((x) => { return x.leaveData._id !== id });
      }
      return this.allLeaves
    })
  }
}
