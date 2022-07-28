import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
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
    private activatedRouter: ActivatedRoute,
    public dialogRef: MatDialogRef<EditExperienciaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    this.sExperiencia.detail(this.data.id).subscribe(data => {
      this.expLab = data;
    }, error => {
      alert('Error al actualizar experiencia');
      window.location.reload();
    })
  }

  onUpdate(id: any): void {
    this.sExperiencia.update(id, this.expLab).subscribe(data => {
      alert('Experiencia actualizada');
      window.location.reload();
    }, error => {
      alert('Error al actualizar experiencia');
      window.location.reload();
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}