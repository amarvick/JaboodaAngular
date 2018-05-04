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
  image: String;
  mainImage: String;

  constructor(private projectService: ProjectService, private dialog: MatDialog) { }

  // By default, all projects are retrieved and the one that shows up in projectdetail is the first one.
  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.selectedProject = this.projectService.getProject(0);
  }

  // Allows user to change project to whatever
  onSelect(project: Project) {
    this.selectedProject = project;
  }

}