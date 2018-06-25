import { Component, OnInit, Inject, Optional } from '@angular/core';

import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[];
  threeProjects: Project[] = []; 

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();

    for (var i = 0; i < 1; i++) {
      var random = Math.floor(Math.random() * this.projects.length)
      this.threeProjects.push(this.projects[random]);
    }
  }
}