import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { MainComponent } from './modules/foldermgmt/components/main/main.component';
import { AddComponent } from './modules/foldermgmt/components/add/add.component';
import { GenqrcodeComponent } from './modules/filerecording/components/genqrcode/genqrcode.component';
import { DetailsComponent } from './modules/filerecording/components/details/details.component';
import { FollowstatusComponent } from './modules/circulation/components/followstatus/followstatus.component';
import { ApproveComponent } from './modules/circulation/components/approve/approve.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { EventlogComponent } from './modules/eventlog/components/eventlog/eventlog.component';
import { FilerecordingsystemComponent } from './modules/filerecordingsystem/components/filerecordingsystem/filerecordingsystem.component';
import { MaindatamgmtComponent } from './modules/maindatamgmt/components/maindatamgmt/maindatamgmt.component';
import { ImportfilesystemComponent } from './modules/importfilesystem/components/importfilesystem/importfilesystem.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    AddComponent,
    GenqrcodeComponent,
    DetailsComponent,
    FollowstatusComponent,
    ApproveComponent,
    DashboardComponent,
    EventlogComponent,
    FilerecordingsystemComponent,
    MaindatamgmtComponent,
    ImportfilesystemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
