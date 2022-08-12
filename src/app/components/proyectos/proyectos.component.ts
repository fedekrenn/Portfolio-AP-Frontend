import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { TokenService } from 'src/app/service/token.service';
import { MatDialog } from '@angular/material/dialog';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { ModalProyectosComponent } from './modal-proyectos/modal-proyectos.component';
import { EditProyectosComponent } from './edit-proyectos/edit-proyectos.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] = [];

  miPortfolio:any;

  constructor(
    private sProyectos: ProyectosService,
    private tokenService: TokenService,
    public dialog: MatDialog
    ) { }


    isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  }

  cargarProyectos(): void {
    this.sProyectos.lista().subscribe(data => {
      this.proyectos = data;
    });
  }

  delete(id: any): void {
    if (id != undefined) {
      this.sProyectos.delete(id).subscribe(data => {
        alert('Proyecto eliminado');
        this.cargarProyectos();
      }, error => {
        alert('Error al eliminar proyecto');
      });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalProyectosComponent, {
      width: '500px',
      data: 'rigth click'
    });
  }

  openDialog2(id: any): void {
    const dialogRef = this.dialog.open(EditProyectosComponent, {
      width: '500px',
      data: { id: id }
    });
    console.log(id)
  }
}
