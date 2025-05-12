import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Mark as standalone
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(response => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/']);

    }, error => {
      alert('Error al iniciar sesión');
    });
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }
}
