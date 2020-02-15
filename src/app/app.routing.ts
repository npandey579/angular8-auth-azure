import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login/login.component";
import {AddUserComponent} from "./component/login/user/add-user/add-user.component";
import {ListUserComponent} from "./component/login/user/list-user/list-user.component";
import {EditUserComponent} from "./component/login/user/edit-user/edit-user.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
