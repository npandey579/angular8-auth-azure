import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/customlogin/login/login.component";
import {AddUserComponent} from "./component/customlogin/user/add-user/add-user.component";
import {ListUserComponent} from "./component/customlogin/user/list-user/list-user.component";
import {EditUserComponent} from "./component/customlogin/user/edit-user/edit-user.component";
import { HomeComponent } from './component/home/home/home.component';
import { CalendarComponent } from './component/calendar/calendar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: '', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
