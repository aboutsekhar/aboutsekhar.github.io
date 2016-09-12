import { Component } from '@angular/core';
@Component({
  selector: 'home',
  templateUrl: 'app/home/index.html'
})
export class HomeComponent { 
  languages : Object[] ;
  constructor(){
    this.languages = [
      { 
        language : 'Python',
        desc : 'Python is a widely used high-level, general-purpose, interpreted, dynamic programming language. Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java.'
      },
      { 
        language : 'R',
        desc : 'R is a language and environment for statistical computing and graphics. It is a GNU project which is similar to the S language and environment which was developed at Bell Laboratories (formerly AT&T, now Lucent Technologies) by John Chambers and colleagues. R can be considered as a different implementation of S. There are some important differences, but much code written for S runs unaltered under R'
      }
    ];
  }
}