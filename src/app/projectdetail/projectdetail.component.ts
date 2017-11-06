import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {

  project: Project;

  constructor(private projectservice: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.projectservice.getProject(id)
      .then(project => this.project = project);
  }

}
