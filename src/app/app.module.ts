import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListUserComponent } from './component/customlogin/user/list-user/list-user.component';
import { LoginComponent } from './component/customlogin/login/login.component';
import { AddUserComponent } from './component/customlogin/user/add-user/add-user.component';
import { EditUserComponent } from './component/customlogin/user/edit-user/edit-user.component';
import {routing} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./service/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MsalModule } from "@azure/msal-angular";
import { OAuthSettings } from './service/oAuth/oAuth';
import { CalendarComponent } from './component/calendar/calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

import { NavBarComponent } from './component/nav-bar/navbar/navbar.component';
import { HomeComponent } from './component/home/home/home.component';
import { AlertsComponent } from './component/alert/alerts/alerts.component';
// Add FontAwesome icons
library.add(faExternalLinkAlt);
library.add(faUserCircle);

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    NavBarComponent,
    HomeComponent,
    AlertsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    MsalModule.forRoot({
      clientID: OAuthSettings.appId
  })
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }