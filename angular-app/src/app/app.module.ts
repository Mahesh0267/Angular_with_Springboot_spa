import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
// import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { CommonModule } from '@angular/common';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
// import { BoardUserComponent } from './board-user/board-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // RegisterComponent,
    // ProfileComponent,
    BoardAdminComponent,
    UserDetailsComponent,
    AddUsersComponent,
    // BoardModeratorComponent,
    // BoardUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDialogModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
