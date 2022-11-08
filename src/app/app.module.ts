import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component'
import {FormsModule} from '@angular/forms';
import { CreateComponent } from './user/create/create.component';
import { EditComponent } from './user/edit/edit.component';






@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
   
          ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
