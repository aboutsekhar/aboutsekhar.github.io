import { Component , Input } from '@angular/core';
@Component({
  selector: 'language',
  templateUrl: 'app/components/languages/index.html',
  styleUrls: ['app/components/languages/language.css']
})
export class LanguageComponent { 
  @Input() langInput: string;
  @Input() langDesc: string;
  constructor(){
  }
}