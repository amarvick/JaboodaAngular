import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatGridListModule, MatListModule, MatDialogModule } from '@angular/material';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { SubcontractingComponent } from './subcontracting/subcontracting.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';

import 'hammerjs';

import { ProjectService } from './services/project.service';
import { CareerService } from './services/career.service';
// import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
// import { MyDialogComponent } from './my-dialog/my-dialog.component';


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
    ProjectdetailComponent
    // MyDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [
    ProjectService,
    CareerService
  ],
  bootstrap: [AppComponent],
  // entryComponents: [MyDialogComponent]
})
export class AppModule { }
