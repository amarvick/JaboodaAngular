import { Component, OnInit, Input } from '@angular/core';

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

  @Input()
  project: Project;

  constructor(private projectservice: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    /* This initialized function should take the first project from the data and display it by default, while allowing the user to still change the displayed picture by clicking on any of the projects */
  }

}
