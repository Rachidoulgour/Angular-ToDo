import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ListsComponent } from './components/lists/lists.component';
import { TaskComponent } from './components/task/task.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    PublicationsComponent,
    ListsComponent,
    TaskComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
