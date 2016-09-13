import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {
    posts: Object[];
    constructor(){
        this.posts = [
            {
                id:'1',
                heading : 'Post 1',
                summary : 'This is Post 1 summary',
                content : [
                'Passage1','Passage2','Passage3'
                ]
            },
            {
                id:'2',
                heading : 'Post 2',
                summary : 'This is Post 2 summary',
                content : [
                'Passage1','Passage2','Passage3'
                ]
            }
        ];
    }
    getPosts(){
        return this.posts;
    }
}