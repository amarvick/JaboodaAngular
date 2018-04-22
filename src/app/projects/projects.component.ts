import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  projects: Project[];
  selectedProject: Project;

  constructor(private projectService: ProjectService, private dialog: MatDialog) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.selectedProject = this.projectService.getProject(0);
  }

  onSelect(project: Project) {
    this.selectedProject = project;
  }

  openDialog() {
    let dialog = this.dialog.open(ProjectDialogComponent);

  }

}

@Component({
  selector: 'app-project-dialog',
  templateUrl: '../project-dialog/project-dialog.component.html',
  styleUrls: ['../project-dialog/project-dialog.component.scss']
})

export class ProjectDialogComponentInPage {

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    close() {
      this.dialogRef.close();
    }

}
