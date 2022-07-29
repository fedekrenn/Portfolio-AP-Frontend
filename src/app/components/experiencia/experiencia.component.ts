import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { EditExperienciaComponent } from './edit-experiencia/edit-experiencia.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];

  miPortfolio: any;
  constructor(
    private datosPortfolio: PortfolioService,
    private sExperiencia: ExperienciaService,
    private tokenService: TokenService,
    public dialog: MatDialog
  ) { }


  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data.experiencia;
    });
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => {
      this.experiencia = data;
    });
  }

  delete(id: any): void {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(data => {
        alert('Experiencia eliminada');
        this.cargarExperiencia();
      }, error => {
        alert('Error al eliminar experiencia');
      });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: 'rigth click'
    });
  }

  openDialog2(id: any): void {
    const dialogRef = this.dialog.open(EditExperienciaComponent, {
      width: '500px',
      data: { id: id }
    });
    console.log(id)
  }
}
