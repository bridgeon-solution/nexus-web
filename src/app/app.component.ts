import { Component, OnInit } from '@angular/core';
import { CanActivateService } from './core/guards/can-activate.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'nexus-frontend';
  logged: boolean = false;

  constructor(private active: CanActivateService) {
    this.logged = active.isLogged;
  }

  ngOnInit(): void {
  }

  isSideNavCollapsed: boolean = false;
  screenWidth = 0;

  ontoggleSideNav(data: SideNavToggle) {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }


}
