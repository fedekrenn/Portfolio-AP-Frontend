import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})

export class EditSkillsComponent implements OnInit {

  skills!: Skills;

  constructor(
    private sSkills: SkillsService,
    public dialogRef: MatDialogRef<EditSkillsComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    this.sSkills.detail(this.data.id).subscribe(data => {
      this.skills = data;
    }, error => {
      this._snackBar.open(`Error al cargar skill: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      })
    })
  }

  onUpdate(id: any): void {
    this.sSkills.update(id, this.skills).subscribe(data => {
      this.dialogRef.close();
      this._snackBar.open(`Skills actualizado correctamente`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      })

      setTimeout(() => {
        window.location.reload();
      }, 2000);

    }, error => {
      this._snackBar.open(`Error al actualizar skill: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      })
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  formatLabel(value: number) {
    return value + '%';
  }
}
