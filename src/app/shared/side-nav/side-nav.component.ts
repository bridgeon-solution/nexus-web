import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { navBarData } from './nav-data';
import { Router } from '@angular/router';
import { NavData } from 'src/app/core/models/navbar.model';
import { InterceptorService } from 'src/app/core/services/interceptor.service';
import { jwtDecode } from 'jwt-decode'
import { MatSnackBar } from '@angular/material/snack-bar';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  constructor(private router: Router, private interceptorSrvc: InterceptorService, private snackBar: MatSnackBar
  ) { }

  isSideNavCollapsed: boolean = false;
  collapsed: boolean = false;
  screenWidth = 0;
  filterMenu: any[] = [];
  role: string = this.interceptorSrvc.decodedToken;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    const token: { exp: number, iat: number, id: number, role: string } = jwtDecode(localStorage.getItem('token'));
    localStorage.setItem('role', token.role);
    navBarData.menu.forEach((element) => {
      const isRolePresent = element.role.find((x) => { return x === token.role });
      if (isRolePresent !== undefined) {
        this.filterMenu.push(element);
      }
    })

  }


  getBodyClass(): string {
    let styleClass: string = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  closeNavbar() {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
  logout(clickackable: boolean) {
    if (clickackable) {
      localStorage.clear();
      this.snackBar.open("Logged Out", 'Close', { duration: 5000 })
    }
  }
}
