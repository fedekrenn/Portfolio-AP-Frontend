import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  persona!: persona;

  constructor(
    private sPersona: PersonaService,
    public dialogRef: MatDialogRef<EditAcercaDeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    this.sPersona.detail(this.data.id).subscribe(data => {
      this.persona = data;
    }, error => {
      alert('Error al actualizar acerca de');
      window.location.reload();
    }
    )
  }

  onUpdate(id: any): void {
    this.sPersona.update(id, this.persona).subscribe(data => {
      alert('Acerca de actualizada');
      window.location.reload();
    }
    , error => {
      alert('Error al actualizar acerca de');
      window.location.reload();
    }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
