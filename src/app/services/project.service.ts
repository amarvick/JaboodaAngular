import { Injectable } from '@angular/core';
import { Project } from '../shared/project';
import { PROJECTS } from '../shared/projects';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    return PROJECTS;
  }

  getProject(id: number): Project {
    return PROJECTS.filter((project) => (project.id === id))[0];
  }

}
