import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectdetailComponent } from '../projectdetail/projectdetail.component';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { SubcontractingComponent } from '../subcontracting/subcontracting.component';
import { CareersComponent } from '../careers/careers.component';
import { ContactusComponent } from '../contactus/contactus.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'about',  component: AboutComponent },
    { path: 'projects',  component: ProjectsComponent },    
    { path: 'projectdetail/:id',  component: ProjectdetailComponent },
    { path: 'project/:id',  component: ProjectDialogComponent },
    { path: 'subcontracting',  component: SubcontractingComponent },
    { path: 'careers',  component: CareersComponent },
    { path: 'contactus',  component: ContactusComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];  