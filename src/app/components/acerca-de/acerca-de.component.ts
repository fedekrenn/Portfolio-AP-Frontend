import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { EditAcercaDeComponent } from './edit-acerca-de/edit-acerca-de.component';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("", "", "", "", "", 0, "", "", "");

  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService,
    public dialog: MatDialog,
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => this.persona = data);
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditAcercaDeComponent, {
      width: '500px',
      data: this.persona
    });
  }

}
