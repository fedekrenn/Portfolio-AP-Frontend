import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { CabeceraService } from 'src/app/service/cabecera.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", "", 0, "", "", "");

  isLogged: boolean = false;

  constructor(
    public cabeceraService: CabeceraService,
    public personaService: PersonaService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {

    this.cabeceraService.headerActualizer.subscribe(data => {
      this.personaService.getPersona().subscribe(data => this.persona = data);
    })

    this.personaService.getPersona().subscribe(data => this.persona = data);
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  }

  onLogout() {
    this.tokenService.logout();
    window.location.reload();
  }
}
