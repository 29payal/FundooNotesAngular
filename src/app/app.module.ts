import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import{MatCheckboxModule} from '@angular/material/checkbox';
import{HttpClientModule} from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import{MatCardModule} from '@angular/material/card';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreateNoteComponent } from './component/create-note/create-note.component';
import{ ResetPasswordComponent} from './component/reset-password/reset-password.component';
 import { CommonModule } from '@angular/common';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
  
    ForgotPasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    ResetPasswordComponent,
    GetAllNotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
     MatSlideToggleModule,
     MatIconModule,
     MatMenuModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
