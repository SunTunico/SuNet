import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(email: string, password: string): boolean {
    // Simule a autenticação (substitua com chamada HTTP para o back-end)
    console.log(email, password)
    return email === 'admin@example.com' && password === 'password';
  }
}
