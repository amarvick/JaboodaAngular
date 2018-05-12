import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatGridListModule, MatListModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { SubcontractingComponent } from './subcontracting/subcontracting.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';

import 'hammerjs';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { ProjectService } from './services/project.service';
import { CareerService } from './services/career.service';

import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app-routing/routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    SubcontractingComponent,
    CareersComponent,
    ContactusComponent,
    AboutComponent,
    ProjectdetailComponent,
    ProjectDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    ProjectService,
    CareerService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ProjectDialogComponent]
})
export class AppModule { }
