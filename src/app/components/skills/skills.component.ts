import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalSkillsComponent } from './modal-skills/modal-skills.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skills[] = [];

  constructor(
    private sSkills: SkillsService,
    private tokenService: TokenService,
    public dialog: MatDialog
  ) { }

  isLogged = false;




  ngOnInit(): void {
    this.cargarSkills();
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  }

  cargarSkills(): void {
    this.sSkills.lista().subscribe(data => {
      this.skills = data;
    });
  }

  delete(id: any): void {
    if (id != undefined) {
      this.sSkills.delete(id).subscribe(data => {
        alert('Skill eliminado');
        this.cargarSkills();
      }, error => {
        alert('Error al eliminar skill');
      });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalSkillsComponent, {
      width: '500px',
      data: 'rigth click'
    });
  }

  openDialog2(id: any): void {
    const dialogRef = this.dialog.open(EditSkillsComponent, {
      width: '500px',
      data: { id: id }
    });
    console.log(id)
  }
}
