import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-modal-proyectos',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.css']
})
export class ModalProyectosComponent implements OnInit {

  nombreProyecto: string = '';
  urlRepo: string = '';
  urlDeploy: string = '';
  imgProyecto: string = '';
  descripcionProyecto: string = '';

  constructor(
    public dialogRef: MatDialogRef<ModalProyectosComponent>,
    private sProyectos: ProyectosService,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    const proyectos = new Proyectos(this.nombreProyecto, this.urlRepo, this.urlDeploy, this.imgProyecto, this.descripcionProyecto);
    this.sProyectos.save(proyectos).subscribe(data => {
      this.dialogRef.close();
      this.snackbar.open('Proyecto creado', 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);

    }, error => {
      this.snackbar.open(`Error al crear proyecto: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    })
  }
}
