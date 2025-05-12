import { Component, OnInit, DoCheck } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true, 
  imports: [RouterLink], 
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, DoCheck {
  isAdmin: boolean = false;
  
  constructor(private router: Router) {}

  ngOnInit() {
    // Initial check
    this.isAdmin = localStorage.getItem('userRole') === 'admin';
  }
  
  ngDoCheck() {
    // Re-check on each change detection cycle
    this.isAdmin = localStorage.getItem('userRole') === 'admin';
  }
  
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
