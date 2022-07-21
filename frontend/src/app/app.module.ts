import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/User/users/users.component';
import { RegisterComponent } from './components/User/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReactiveFormsModule,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//https://www.positronx.io/how-to-use-angular-8-httpclient-to-post-formdata/
