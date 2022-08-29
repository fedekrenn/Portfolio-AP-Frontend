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

  educaciones: Educacion[];

  constructor(
    private service: EducacionService,
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
    this.service.lista().subscribe(data => {
      this.educaciones = data;
    });
  }

  delete(id: any): void {
    if (id != undefined) {
      this.service.delete(id).subscribe(data => {
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

  openDialogNew(): void {
    const dialogRef = this.dialog.open(ModalEducacionComponent, {
      width: '500px',
      data: 'rigth click'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cargarEducacion();
    });
  }

  openDialogEdit(id: any): void {
    const dialogRef = this.dialog.open(EditEducacionComponent, {
      width: '500px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cargarEducacion();
    });
  }
}