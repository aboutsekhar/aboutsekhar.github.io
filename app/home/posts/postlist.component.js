"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var posts_service_1 = require('./posts.service');
var PostsListComponent = (function () {
    function PostsListComponent(postService) {
        this.postService = postService;
        this.posts = postService.getPosts();
    }
    PostsListComponent = __decorate([
        core_1.Component({
            selector: 'postslist',
            templateUrl: 'app/home/posts/index.html',
            styleUrls: ['app/home/posts/container.css'],
            providers: [posts_service_1.PostsService]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService])
    ], PostsListComponent);
    return PostsListComponent;
}());
exports.PostsListComponent = PostsListComponent;
//# sourceMappingURL=postlist.component.js.map