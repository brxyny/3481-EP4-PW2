import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/users/login/login.component'; // Componente de Login
import { AppComponent } from './app.component'; // Componente Principal
import { AuthGuard } from './guards/auth.guard'; // Guard para proteger rutas
import { InicioComponent } from './pages/main/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige al login por defecto
  { path: 'login', component: LoginComponent }, // Ruta para el login
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] }, // Ruta protegida para el componente principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
