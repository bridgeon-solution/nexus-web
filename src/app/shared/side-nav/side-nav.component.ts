import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { navBarData } from './nav-data';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  // @Input() collapsed:boolean = false;
  // @Input() screenWidth:number = 0;

  isSideNavCollapsed: boolean = false;
  collapsed: boolean = false;
  navData = navBarData;
  screenWidth = 0;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
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
    this.router.navigate([{ outlets: { contents: ['employees']} }]);
  }
}
