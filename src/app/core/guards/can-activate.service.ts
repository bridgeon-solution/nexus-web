import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {
  isLogged:boolean = false;
  constructor(private authService: AuthService) { }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.authService.isLoggedIn = true;
    
    if (localStorage.getItem('value')) {
      this.isLogged = true
      return true;
    }else {
      this.isLogged = false;
      return false; // Replace with your logic to check login state
    }
  }
}
