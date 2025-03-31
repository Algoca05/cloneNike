import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AuthService } from '../services/auth.service';
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

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.nombre, this.email, this.password).subscribe(response => {
      this.router.navigate(['/login']); // Redirect to home
    }, error => {
      alert('Error en el registro');
    });
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
