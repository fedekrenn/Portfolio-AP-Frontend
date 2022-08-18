import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expLab!: Experiencia;

  constructor(
    private sExperiencia: ExperienciaService,
    public dialogRef: MatDialogRef<EditExperienciaComponent>,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.sExperiencia.detail(this.data.id).subscribe(data => {
      this.expLab = data;
    }, error => {
      this.snackbar.open(`Error al cargar experiencia: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    })
  }

  onUpdate(id: any): void {
    this.sExperiencia.update(id, this.expLab).subscribe(data => {
      this.dialogRef.close();
      this.snackbar.open('Experiencia actualizada', 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);

    }, error => {
      this.snackbar.open( `Error al actualizar experiencia: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}