import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  eduEdu!: Educacion;

  constructor(
    private sEducacion: EducacionService,
    public dialogRef: MatDialogRef<EditEducacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    this.sEducacion.detail(this.data.id).subscribe(data => {
      this.eduEdu = data;
    }, error => {
      alert('Error al actualizar educacion');
      window.location.reload();
    })
  }

  onUpdate(id: any): void {
    this.sEducacion.update(id, this.eduEdu).subscribe(data => {
      alert('Educacion actualizada');
      window.location.reload();
    }, error => {
      alert('Error al actualizar educacion');
      window.location.reload();
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
