import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {

  proyectos!: Proyectos;

  constructor(
    private sProyectos: ProyectosService,
    public dialogRef: MatDialogRef<EditProyectosComponent>,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.sProyectos.detail(this.data.id).subscribe(data => {
      this.proyectos = data;
    }, error => {
      this.snackbar.open(`Error al cargar proyectos: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    })
  }

  onUpdate(id: any): void {
    this.sProyectos.update(id, this.proyectos).subscribe(data => {
      this.dialogRef.close();
      this.snackbar.open('Proyecto actualizado', 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);

    }, error => {
      this.snackbar.open(`Error al actualizar proyecto: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}