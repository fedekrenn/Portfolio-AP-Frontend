import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})

export class ModalComponent implements OnInit {

  nombreExperiencia: string = '';
  descripcionExperiencia: string = '';
  compania: string = '';
  imgExp: string = '';
  startExp: number;
  endExp: string = '';

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private service: ExperienciaService,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreExperiencia, this.descripcionExperiencia, this.compania, this.imgExp, this.startExp, this.endExp);
    this.service.save(expe).subscribe(data => {
      this.dialogRef.close();
      this.snackbar.open('Experiencia creada', 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    }, error => {
      this.snackbar.open(`Error al crear experiencia: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}