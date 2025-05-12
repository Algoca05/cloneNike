import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true, // Mark as standalone
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';

  // Se añade propiedad para identificar si es admin o no
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.nombre, this.email, this.password, this.isAdmin).subscribe(response => {
      localStorage.setItem('userRole', this.isAdmin ? 'admin' : 'user'); // set the role
      this.router.navigate(['/login']); // Redirect to login
    }, error => {
      alert('Error en el registro');
    });
  }

  // Método para alternar el estado de admin
  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
