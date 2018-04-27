import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialog } from '@angular/material';

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

  openDialog(project: Project): void {
    let dialogRef = this.dialog.open(ProjectDialogComponent, {
      data: {
        address: this.selectedProject.address,
        images: this.selectedProject.images
      }
    })
  }
}