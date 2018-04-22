import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { Params } from '@angular/router';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent {

  projects: Project[];
  selectedProject: Project;

  constructor(
        private dialogRef: MatDialogRef<ProjectDialogComponent>,
        private projectService: ProjectService,
        private dialog: MatDialog
  ) { }

  ngOnInit() { }

  confirmSelection() {
    this.dialogRef.close(this.selectedProject);
  }

}
