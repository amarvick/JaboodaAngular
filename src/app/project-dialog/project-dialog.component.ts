import { Component, OnInit, Inject, Optional  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent {
  public values;
  project: Project;

  constructor(
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<ProjectDialogComponent>
  ) { }

  ngOnInit(): void { 
    this.values = this.data;
  }

  close() {
    this.dialogRef.close(this.project);
  }

}
