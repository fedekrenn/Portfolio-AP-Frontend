import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  persona: persona = new persona("", "", "", "", "", 0, "", "", "");

  isLogged: boolean = false;

  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => this.persona = data);
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  }

  onLogout() {
    this.tokenService.logout();
    window.location.reload();
  }
}
