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

  // Work on this 
  getPhoto(images: string): Project {
    return PROJECTS.filter((project) => (project.images[project.id] === images))[0];
  }

}
