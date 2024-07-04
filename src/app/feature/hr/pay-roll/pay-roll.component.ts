import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Department, EmployeePayment } from 'src/app/core/models/api.model';
import { DepartmentService } from 'src/app/core/services/department.service';
import { EmployeeService } from 'src/app/core/services/employee.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-pay-roll',
  templateUrl: './pay-roll.component.html',
  styleUrls: ['./pay-roll.component.css']
})

export class PayRollComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'Staff', 'Base salary', 'Deduction', 'Total'];
  dropDownOptions: Department[] = [];
  allEmployees: EmployeePayment[] = [];
  disableSelect = new FormControl();
  totalEmployees: number = 0;
  selectedDepartment: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private departmentService: DepartmentService, private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.fetchEmployee()
    this.fetchDepartment()
  }

  fetchEmployee() {
    this.employeeService.getAllEmployees(this.currentPage, this.itemsPerPage).subscribe((res: { status: string, data: { data: [EmployeePayment], total: number } }) => {
      this.allEmployees = res.data.data;
      this.totalEmployees = res.data.total;
    })
  }

  fetchDepartment() {
    this.departmentService.getAllDepartments().subscribe((res: { status: string, data: [Department] }) => {
      this.dropDownOptions = res.data;
      this.dropDownOptions.push({ id: 0, name: 'All' })
    })
  }

  filterEmployee() {
    if (this.selectedDepartment === 'All' || this.selectedDepartment.length === 0) {
      return this.allEmployees
    }
    return this.allEmployees.filter((x) => { return x.department.name === this.selectedDepartment })
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.fetchEmployee();
  }

}
