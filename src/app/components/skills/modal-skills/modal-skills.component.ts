import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
      alert('Skill añadido!');
      this.dialogRef.close();
      window.location.reload();
    }, error => {
      alert('Error al crear skill');
      this.dialogRef.close();
    })
  }

  formatLabel(value: number) {
    return value + '%';
  }
}
