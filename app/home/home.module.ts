import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { homeRouting } from './home.routing';
import { PostDetailComponent } from './posts/postdetail.component';
import { PostsListComponent } from './posts/postlist.component';
import { PostsContainerComponent } from './posts/postcontainer.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    homeRouting
  ],
  declarations : [
    PostsListComponent ,
    PostDetailComponent,
    PostsContainerComponent
  ],
  exports : [
    PostsContainerComponent
  ]
})
export class HomeModule { }
