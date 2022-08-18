import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls: ['./modal-skills.component.css']
})

export class ModalSkillsComponent implements OnInit {

  nombreSkill: string = '';
  porcentajeSkill: number;
  colorSkill: string = '';

  constructor(
    public dialogRef: MatDialogRef<ModalSkillsComponent>,
    private sSkills: SkillsService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    const skill = new Skills(this.nombreSkill, this.porcentajeSkill, this.colorSkill);
    this.sSkills.save(skill).subscribe(data => {
      this.dialogRef.close();
      this.snackBar.open(`Skill creado correctamente`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      })

      setTimeout(() => {
        window.location.reload();
      }, 2000);

    }, error => {
      this.snackBar.open(`Error al crear skill: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      })
    })
  }

  formatLabel(value: number) {
    return value + '%';
  }
}
