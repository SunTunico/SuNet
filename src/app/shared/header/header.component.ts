import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  redirectToUserProfile() {
    this.router.navigate(['usuario']);
    console.log('Redirecionado para user profile');
  }

  constructor(private router: Router) { }

  logout() {
    this.router.navigate(['login']);
    console.log('Usuario deslogado!');
  }
}
