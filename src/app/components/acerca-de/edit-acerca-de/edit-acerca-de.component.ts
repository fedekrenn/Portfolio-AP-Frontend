import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})

export class EditAcercaDeComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", "", 0, "", "", "");

  constructor(
    private service: PersonaService,
    public dialogRef: MatDialogRef<EditAcercaDeComponent>,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.service.detail(this.data.id).subscribe(data => {
      this.persona = data;
    }, error => {
      this.snackbar.open(`Error al cargar los datos de la persona: ${error.error.mensaje}`, 'Cerrar', {
        duration: 6000,
        verticalPosition: 'bottom'
      });
    })
  }

  onUpdate(id: any): void {
    this.service.update(id, this.persona).subscribe(data => {
      this.dialogRef.close();
      this.snackbar.open('"Acerca de" actualizada', 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    }, error => {
      this.snackbar.open(`Error al actualizar "Acerca de": ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}