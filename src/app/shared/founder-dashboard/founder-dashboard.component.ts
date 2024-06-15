import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-founder-dashboard',
  templateUrl: './founder-dashboard.component.html',
  styleUrls: ['./founder-dashboard.component.css']
})
export class FounderDashboardComponent implements OnInit {
  @Input() dashboardDatas;


  ngOnInit(): void {
  
    
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
