import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { navBarData } from './nav-data';
import { Router } from '@angular/router';
import { NavData } from 'src/app/core/models/navbar.model';
import { InterceptorService } from 'src/app/core/services/interceptor.service';
import { jwtDecode } from 'jwt-decode'

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

  constructor(private router: Router, private interceptorSrvc: InterceptorService) { }

  isSideNavCollapsed: boolean = false;
  collapsed: boolean = false;
  navData = navBarData;
  screenWidth = 0;
  menu: NavData[] = [];
  filterMenu: any[] = [];
  role: string = this.interceptorSrvc.decodedToken;

  ngOnInit(): void {
    const token: { exp: number, iat: number, id: number, role: string } = jwtDecode(localStorage.getItem('token'));

    this.screenWidth = window.innerWidth;
    navBarData.menu.forEach((element: any) => {
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

  link() {
    this.router.navigate([{ outlets: { contents: ['employees'] } }]);
  }
}
