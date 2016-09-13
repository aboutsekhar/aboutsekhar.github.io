import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {
    posts: Object[];
    constructor(){
        this.posts = [
            {
                id:'1',
                heading : 'ANGULAR MODULES',
                summary : 'Define application modules with @NgModule',
                content : [
                    'Angular Modules help organize an application into cohesive blocks of functionality.',
                    'An Angular Module is a class adorned with the @NgModule decorator function. @NgModule takes a metadata object that tells Angular how to compile and run module code. It identifies the modules own components, directives and pipes, making some of them public so external components can use them. It may add service providers to the application dependency injectors. And there are more options covered here.',
                    'Modules are a great way to organize the application and extend it with capabilities from external libraries'
                ]
            },
            {
                id:'2',
                heading : 'ROUTING & NAVIGATION',
                summary : 'Discover the basics of screen navigation with the Angular 2 Component Router.',
                content : [
                    'The Angular Component Router enables navigation from one view to the next as users perform application tasks.',
                    'The browser is a familiar model of application navigation. We enter a URL in the address bar and the browser navigates to a corresponding page. We click links on the page and the browser navigates to a new page. We click the browsers back and forward buttons and the browser navigates backward and forward through the history of pages weve seen.',
                    'The Angular Component Router ("the router") borrows from this model. It can interpret a browser URL as an instruction to navigate to a client-generated view and pass optional parameters along to the supporting view component to help it decide what specific content to present. We can bind the router to links on a page and it will navigate to the appropriate application view when the user clicks a link. We can navigate imperatively when the user clicks a button, selects from a drop box, or in response to some other stimulus from any source. And the router logs activity in the browsers history journal so the back and forward buttons work as well.',
                    'Most routing applications should add a <base> element to the index.html as the first child in the <head> tag to tell the router how to compose navigation URLs'
                ]
            }
        ];
    }
    getPosts(){
        return this.posts;
    }
}