import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
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

  constructor(
    private sEducacion: EducacionService,
    private tokenService: TokenService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(data => {
      this.educacion = data;
    });
  }

  delete(id: any): void {
    if (id != undefined) {
      this.sEducacion.delete(id).subscribe(data => {
        this.cargarEducacion();

        this.snackbar.open('Educacion eliminada', 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });

      }, error => {
        this.snackbar.open(`Error al eliminar educacion: ${error.error.mensaje}`, 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
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
  }
}