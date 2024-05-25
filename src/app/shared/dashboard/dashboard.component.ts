import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data = [
    {
      icon: '../../../assets/icons/businessman_7086777.png',
      head: 'Employees',
      count: 10,
      subHead: 'Employees',
      link:'home/employees'
    }, {
      icon: '../../../assets/icons/notes_9885627.png',
      head: 'Leaves',
      count: 1,
      subHead: 'Pending Leave',
      link:'home/leaves'
    }, {
      icon: '../../../assets/icons/project_7754996.png',
      head: 'Projects',
      count: 5,
      subHead: 'Ongoing Projects',

    }, {
      icon: '../../../assets/icons/megaphone_10321186.png',
      head: 'Announcements',
      count: 1,
      subHead: 'Announcement',

    }
  ]

  leaves = [
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
    {
      name: 'Jone Doe',
      type: 'Casual',
      days: 4,
      status: 'Active'
    },
  ]

  getColor(head: string) {
    switch (head) {
      case 'Employees':
        return '#4E3DB8';
      case 'Leaves':
        return '#003E77';
      case 'Projects':
        return '#F8614D';
      case 'Announcements':
        return '#5FAC66';
      default:
        return 'gray'; // Default color for unknown heads
    }
  }
}
