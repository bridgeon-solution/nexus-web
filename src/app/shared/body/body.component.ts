import { Component, Input } from '@angular/core';
import { CanActivateService } from 'src/app/core/guards/can-activate.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input() collapsed:boolean = false;
  @Input() screenWidth:number = 0;

  constructor(private activate: CanActivateService) {}

  getBodyClass():string {
    let styleClass:string = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
