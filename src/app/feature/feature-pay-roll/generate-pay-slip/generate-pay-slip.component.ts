import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Department, EmployeePayment } from 'src/app/core/models/api.model';
import { PayRoll } from 'src/app/core/models/payRoll.model';
import { DepartmentService } from 'src/app/core/services/department.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { PayRollService } from 'src/app/core/services/pay-roll.service';

@Component({
  selector: 'app-generate-pay-slip',
  templateUrl: './generate-pay-slip.component.html',
  styleUrls: ['./generate-pay-slip.component.css'],
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
export class GeneratePaySlipComponent {
  displayedColumns: string[] = ['position', 'Staff', 'Base salary', 'Deduction', 'Total'];
  dropDownOptions: Department[] = [];
  allEmployees: EmployeePayment[] = [];
  disableSelect = new FormControl();
  totalEmployees: number = 0;
  selectedDepartment: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private departmentService: DepartmentService, private employeeService: EmployeeService, private payRollService: PayRollService) { }
  ngOnInit(): void {
    this.fetchEmployee()
    this.fetchDepartment()
  }

  fetchEmployee() {
    this.employeeService.getAllEmployees(this.currentPage, this.itemsPerPage).subscribe((res: { status: string, data: { data: [EmployeePayment], total: number } }) => {
      this.allEmployees = res.data.data.filter((x) => { return x.isgenerate === false });
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

  calculateNetPay(salary: number, deduction: number): number {
    return salary - deduction;
  }

  validation(id: any) {
    // console.log( );
    return true;
  }

  generatePaySlip(empId: number, paymentData: EmployeePayment) {
    console.log(paymentData);
    const payRollData: PayRoll = {
      baseSalary: paymentData.salary,
      deductions: paymentData.deduction,
      employeeId: paymentData.id,
      paymentDate: new Date(),
      netPay: paymentData.salary - paymentData.deduction,
    }

    this.payRollService.createPayRoll(empId, payRollData).subscribe((res) => {
      this.employeeService.paySlip(empId).subscribe((res) => {
        console.log(res);
        this.fetchEmployee();
      })
    }, (err) => {
      console.log(err);
    })
  }
}
