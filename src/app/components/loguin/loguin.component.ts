import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})

export class LoguinComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  logginUsser!: LoginUsuario;
  usserName!: string;
  password!: string;
  roles: string[] = [];
  errorMessage!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.logginUsser = new LoginUsuario(this.usserName, this.password);
    this.authService.loginUser(this.logginUsser).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = data.authorities;
      this.tokenService.saveToken(data.token);
      this.tokenService.saveUser(this.usserName);
      this.tokenService.saveAuthorities(data.authorities);
      this.router.navigate(['/']);
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errorMessage = err.error.message;
    }
    );
  }
}
