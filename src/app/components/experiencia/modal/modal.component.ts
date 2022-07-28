import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
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
    private sExperiencia: ExperienciaService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreExperiencia, this.descripcionExperiencia, this.compania, this.imgExp, this.startExp, this.endExp);
    this.sExperiencia.save(expe).subscribe(data => {
      alert('Experiencia creada');
      this.dialogRef.close();
      window.location.reload();
    }, error => {
      alert('Error al crear experiencia');
      this.dialogRef.close();
    })
  }
}
