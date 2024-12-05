import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token'); // Verifica si hay un token en el localStorage
    if (token) {
      return true; // Permite el acceso
    } else {
      this.router.navigate(['/']); // Redirige al login si no hay token
      return false;
    }
  }
}
