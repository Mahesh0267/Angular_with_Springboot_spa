import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import { ProfileComponent } from './profile/profile.component';
// import { BoardUserComponent } from './board-user/board-user.component';
// import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'user', component: BoardUserComponent },
  // { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
