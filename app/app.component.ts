import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Under development ....</h1>
  <input type='text' [value]='name' (keyup)='update($event)'>
  `
})
export class AppComponent { 
  constructor(){
    this.name="Rajasekhar";
  }
  update(e){
    this.name=e.target.value;
  }
}
