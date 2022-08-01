import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    this.sSkills.detail(this.data.id).subscribe(data => {
      this.skills = data;
    }, error => {
      alert('Error al actualizar skills');
      window.location.reload();
    })
  }

  onUpdate(id: any): void {
    this.sSkills.update(id, this.skills).subscribe(data => {
      alert('Skills actualizados');
      window.location.reload();
    }, error => {
      alert('Error al actualizar skills');
      window.location.reload();
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
