import { Routes , RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PostsListComponent } from './posts/postlist.component';
import { PostDetailComponent } from './posts/postdetail.component';
import { PostsContainerComponent } from './posts/postcontainer.component';
import { TutorialsListComponent } from './tutorials/tutoriallist.component';
const homeRoutes: Routes = [
  {
    path: 'home',
    component: PostsContainerComponent,
    children: [
      { path: 'posts/:id',  component: PostDetailComponent },
      { path: 'posts',     component: PostsListComponent },
      { path: 'tutorials' , component : TutorialsListComponent}
    ]
  }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);