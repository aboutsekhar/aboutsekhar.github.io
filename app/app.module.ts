import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';


import { AppComponent }       from './app.component';
import { routing,
         appRoutingProviders } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { PageNotFoundComponent } from './pagenotfound';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    MessagesComponent,
    PageNotFoundComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
