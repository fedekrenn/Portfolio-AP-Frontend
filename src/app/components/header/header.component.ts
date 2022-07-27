import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;



  miPortfolio: any;
  constructor(private datosPortfolio: PortfolioService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onLogout() {
    this.tokenService.logout();
    window.location.reload();
  }

}
