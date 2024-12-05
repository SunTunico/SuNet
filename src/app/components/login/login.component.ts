import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  loginData = { email: '', password: '' };
  errorMessage: string | null = null;

  onSubmit() {
    this.router.navigate(['home']);

    // const success = this.authService.login(this.loginData.email, this.loginData.password);
    // if (!success) {
    //   this.errorMessage = 'Invalid email or password.';
    //   return;
    // }
    console.log('Login successful');
  }
}
