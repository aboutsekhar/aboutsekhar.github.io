import { Component, Input } from '@angular/core';
import { PostsService } from './posts.service';
@Component({
  selector: 'postslist',
  templateUrl: 'app/home/posts/index.html',
  providers : [PostsService]
})
export class PostsListComponent { 
  posts: Object[];
  constructor(private postService : PostsService){
    this.posts = postService.getPosts();
  }
}