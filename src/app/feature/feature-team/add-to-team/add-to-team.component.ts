import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'src/app/core/models/api.model';
import { Team } from 'src/app/core/models/team.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { TeamMembersService } from 'src/app/core/services/team-members.service';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-add-to-team',
  templateUrl: './add-to-team.component.html',
  styleUrls: ['./add-to-team.component.css'],
  animations: [
    trigger('listAnim', [
      transition(':enter', [
        style({ transform: 'translatey(-10%)' }),
        animate('1s ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AddToTeamComponent implements OnInit {
  selectedEmployees$ = new BehaviorSubject<number[]>([]);
  selectedEmployees: number[] = []
  allEmployees: Employee[] = []
  teams: Team[] = [];
  selectedTeam: Team | null = null;

  constructor(private teamService: TeamService, private employeeService: EmployeeService, private snackBar: MatSnackBar, private teamMemberService: TeamMembersService, public dialogRef: MatDialogRef<AddToTeamComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { option: string }) { }


  ngOnInit(): void {
    this.getAllEmployees()
    const storedSelection = localStorage.getItem('selectedEmployees');
    if (storedSelection) {
      this.selectedEmployees = JSON.parse(storedSelection) as number[];
    }
    this.loadSelectedTeam()
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((res: { status: string, data: [Employee] }) => {
      this.allEmployees = res.data.filter(emp => emp.role !== 'Team Leader' && emp.role !== 'HR')
    }, (error) => {
      console.log(error)
    })
  }

  private loadSelectedTeam(): void {
    // Assuming you have a method to get the selected team
    this.teamService.getTeamById(this.data.option).subscribe((res: { status: String, data: Team }) => {
      this.selectedTeam = res.data;
    });
  }

  addToTeam(employeeId: number) {
    this.teamMemberService.addToTeam(employeeId, this.data.option).subscribe((res: { status: string, data: Team }) => {
      if (res.status === 'success') {
        this.snackBar.open('Employee Added to the Team', 'Close', {
          duration: 3000, // Duration in milliseconds
          horizontalPosition: 'center', // Position the snackbar
          verticalPosition: 'top',
        });
        if (this.selectedTeam) {
          this.selectedTeam.members.push(employeeId)
        }
        localStorage.setItem('selectedEmployees', JSON.stringify(this.selectedEmployees));
      }
    }, (error) => {
      console.log(error)
      this.snackBar.open(error.error.message, 'Close', {
        duration: 3000, // Duration in milliseconds
        horizontalPosition: 'center', // Position the snackbar
        verticalPosition: 'top',
      });
    })
  }

  deleteFromTeam(employeeId: number) {
    this.teamMemberService.deleteFromTeam(employeeId, this.data.option).subscribe((res) => {
      this.snackBar.open('Employee Removed from the Team', 'Close', {
        duration: 3000, // Duration in milliseconds
        horizontalPosition: 'center', // Position the snackbar
        verticalPosition: 'top',
      });
      if (this.selectedTeam) {
        this.selectedTeam.members = this.selectedTeam.members.filter(id => id !== employeeId);
      }
    })
    const employeeIndex = this.selectedEmployees.indexOf(employeeId);
    if (employeeIndex !== -1) {
      this.selectedEmployees.splice(employeeIndex, 1);
      localStorage.setItem('selectedEmployees', JSON.stringify(this.selectedEmployees));// Persist changes to local storage
    }
  }

  isEmployeeInTeam(employeeId: number): boolean {
    return this.selectedTeam?.members.includes(employeeId) || false;
  }

}

