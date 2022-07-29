import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {

  nombreEducacion: string = '';
  descripcionEducacion: string = '';
  establecimiento: string = '';
  imgEducacion: string = '';
  startEducacion: number;
  endEducacion: string = '';

  constructor(
    public dialogRef: MatDialogRef<ModalEducacionComponent>,
    private sEducacion: EducacionService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreEducacion, this.descripcionEducacion, this.establecimiento, this.imgEducacion, this.startEducacion, this.endEducacion);
    this.sEducacion.save(educacion).subscribe(data => {
      alert('Educacion creada');
      this.dialogRef.close();
      window.location.reload();
    }, error => {
      alert('Error al crear educacion');
      this.dialogRef.close();
    })
  }
}
