import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');
  const route: Router = inject(Router);
  const toast: MatSnackBar = inject(MatSnackBar)

  if (token) {
    return true
  } else {
    route.navigate(['/login']);
    toast.open('Please signup', 'Close', {
      duration: 2000
    })
    return false;
  }
};
