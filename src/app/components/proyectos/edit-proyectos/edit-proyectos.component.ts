import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    this.sProyectos.detail(this.data.id).subscribe(data => {
      this.proyectos = data;
    }, error => {
      alert('Error al actualizar proyectos');
      window.location.reload();
    })
  }

  onUpdate(id: any): void {
    this.sProyectos.update(id, this.proyectos).subscribe(data => {
      alert('Proyectos actualizada');
      window.location.reload();
    }, error => {
      alert('Error al actualizar proyectos');
      window.location.reload();
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
