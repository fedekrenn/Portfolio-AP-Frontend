import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  imgProyecto:  string = '';
  descripcionProyecto: string = '';

  constructor(
    public dialogRef: MatDialogRef<ModalProyectosComponent>,
    private sProyectos: ProyectosService,
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
      alert('Proyecto creado');
      this.dialogRef.close();
      window.location.reload();
    }, error => {
      alert('Error al crear proyecto');
      this.dialogRef.close();
    })
  }
}
