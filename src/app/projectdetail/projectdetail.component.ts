import { Component, OnInit, Inject, Input, SimpleChanges } from '@angular/core';
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
  image: String;
  mainImage: String;

  constructor(private projectService: ProjectService, private dialog: MatDialog) { }

  ngOnInit() { 
    this.mainImage = this.projectService.getProject(0).images[0];
  }

  // Opens up Photo Gallery
  openDialog(project: Project): void {
    let dialogRef = this.dialog.open(ProjectDialogComponent, {
      data: {
        address: this.project.address,
        images: this.project.images
      }
    })
  }

  // Changes the Main Image when any GALLERY PHOTO is selected
  changeImage(image: String) {
    this.mainImage = image;
  }

  // Changes the Main Image when another PROJECT is selected
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if(propName === 'project') {
        Promise.resolve(null).then(() =>
          {this.mainImage = this.project.images[0]}
        );
      }
    }
  }
}