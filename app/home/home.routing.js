"use strict";
var router_1 = require('@angular/router');
var postlist_component_1 = require('./posts/postlist.component');
var postdetail_component_1 = require('./posts/postdetail.component');
var container_component_1 = require('./container.component');
var tutoriallist_component_1 = require('./tutorials/tutoriallist.component');
var homeRoutes = [
    {
        path: 'home',
        component: container_component_1.PostsContainerComponent,
        children: [
            { path: 'posts/:id', component: postdetail_component_1.PostDetailComponent },
            { path: 'posts', component: postlist_component_1.PostsListComponent },
            { path: 'tutorials', component: tutoriallist_component_1.TutorialsListComponent }
        ]
    }
];
exports.homeRouting = router_1.RouterModule.forChild(homeRoutes);
//# sourceMappingURL=home.routing.js.map