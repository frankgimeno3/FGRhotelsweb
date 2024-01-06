import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-NavUnlogged',
  templateUrl: './NavUnlogged.component.html',
  styleUrls: ['./NavUnlogged.component.css']
})
export class NavUnloggedComponent {
  constructor(private router: Router) { }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}