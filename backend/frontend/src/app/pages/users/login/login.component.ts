import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log(this.email, this.password); // Verifica que los datos ingresados son correctos
    this.authService.login(this.email, this.password).subscribe(
        (response) => {
            console.log(response); // Inspecciona la respuesta del backend
            localStorage.setItem('token', response.token);
            this.router.navigate(['/inicio']);
        },
        (error) => {
            this.errorMessage = 'Credenciales incorrectas';
            console.error(error); // Verifica si hay un error en la petición
        }
    );
  }
}
