import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalSkillsComponent } from './modal-skills/modal-skills.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];

  constructor(
    private service: SkillsService,
    private tokenService: TokenService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  }

  cargarSkills(): void {
    this.service.lista().subscribe(data => {
      this.skills = data;
    });
  }

  delete(id: any): void {
    if (id != undefined) {
      this.service.delete(id).subscribe(data => {
        this.cargarSkills();

        this._snackBar.open('Skill eliminado', 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
        
      }, error => {
        this._snackBar.open(`Error al eliminar skill: ${error.error.mensaje}`, 'Cerrar', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
      });
    }
  }

  openDialogNew(): void {
    const dialogRef = this.dialog.open(ModalSkillsComponent, {
      width: '500px',
      data: 'rigth click'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cargarSkills();
    });
  }

  openDialogEdit(id: any): void {
    const dialogRef = this.dialog.open(EditSkillsComponent, {
      width: '500px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cargarSkills();
    });
  }
}