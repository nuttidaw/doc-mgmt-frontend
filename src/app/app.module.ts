import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { FoldermgmtComponent } from './modules/foldermgmt/foldermgmt.component';
import { MainComponent } from './modules/foldermgmt/main/main.component';
import { AddComponent } from './modules/foldermgmt/add/add.component';
import { GenqrcodeComponent } from './modules/filerecording/genqrcode/genqrcode.component';
import { DetailsComponent } from './modules/filerecording/details/details.component';
import { ImportfileComponent } from './modules/importfile/importfile.component';
import { CirculationComponent } from './modules/circulation/circulation.component';
import { FollowstatusComponent } from './modules/circulation/followstatus/followstatus.component';
import { ApproveComponent } from './modules/circulation/approve/approve.component';
import { FiledisposalmgmtComponent } from './modules/filedisposalmgmt/filedisposalmgmt.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EventlogComponent } from './modules/eventlog/eventlog.component';
import { FilerecordingsystemComponent } from './modules/filerecordingsystem/filerecordingsystem.component';
import { MaindatamgmtComponent } from './modules/maindatamgmt/maindatamgmt.component';
import { ImportfilesystemComponent } from './modules/importfilesystem/importfilesystem.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotificationComponent,
    FoldermgmtComponent,
    MainComponent,
    AddComponent,
    GenqrcodeComponent,
    DetailsComponent,
    ImportfileComponent,
    CirculationComponent,
    FollowstatusComponent,
    ApproveComponent,
    FiledisposalmgmtComponent,
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
