import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'my-app',
  directives: [NavbarComponent],
  templateUrl: 'app/app-container.html'
})
export class AppComponent { 
  constructor(){
  }
}
