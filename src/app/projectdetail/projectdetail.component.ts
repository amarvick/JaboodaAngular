import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {

  @Input()
  project: Project;
  projects: Project[];
  selectedProject: Project;

  constructor(private projectservice: ProjectService, private dialog: MatDialog) { }

  ngOnInit() { }

  openDialog(project: Project): void {
    let dialogRef = this.dialog.open(ProjectDialogComponent, {
      data: {
        // address: this.selectedProject.address,
        images: this.selectedProject.images
      }
    })
  }

}
