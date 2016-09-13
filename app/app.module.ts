import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';


import { AppComponent }       from './app.component';
import { routing,
         appRoutingProviders } from './app.routing';
import { HomeModule } from './home/home.module';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { PageNotFoundComponent } from './pagenotfound';
import { HighlightDirective } from './directives/highlight.directive';
import { LanguageComponent } from './components/languages/language.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HomeModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    MessagesComponent,
    HighlightDirective,
    LanguageComponent,
    PageNotFoundComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
