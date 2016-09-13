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
var PostsService = (function () {
    function PostsService() {
        this.posts = [
            {
                id: '1',
                heading: 'Post 1',
                summary: 'This is Post 1 summary',
                content: [
                    'Passage1', 'Passage2', 'Passage3'
                ]
            },
            {
                id: '2',
                heading: 'Post 2',
                summary: 'This is Post 2 summary',
                content: [
                    'Passage1', 'Passage2', 'Passage3'
                ]
            }
        ];
    }
    PostsService.prototype.getPosts = function () {
        return this.posts;
    };
    PostsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map