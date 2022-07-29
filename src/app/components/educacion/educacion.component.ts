import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';
import { EditEducacionComponent } from './edit-educacion/edit-educacion.component';
import { ModalEducacionComponent } from './modal-educacion/modal-educacion.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  miPortfolio: any;

  constructor(
    private datosPortfolio: PortfolioService,
    private sEducacion: EducacionService,
    private tokenService: TokenService,
    public dialog: MatDialog
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data.educacion;
    });
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(data => {
      this.educacion = data;
    });
  }

  delete(id: any): void {
    if (id != undefined){
      this.sEducacion.delete(id).subscribe(data => {
        alert('Educacion eliminada');
        this.cargarEducacion();
      }, error => {
        alert('Error al eliminar educacion');
      });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalEducacionComponent, {
      width: '500px',
      data: 'rigth click'
    });
  }

  openDialog2(id: any): void {
    const dialogRef = this.dialog.open(EditEducacionComponent, {
      width: '500px',
      data: { id: id }
    });
    console.log(id)
  }
}
