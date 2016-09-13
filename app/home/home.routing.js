"use strict";
var router_1 = require('@angular/router');
var postlist_component_1 = require('./posts/postlist.component');
var postdetail_component_1 = require('./posts/postdetail.component');
var postcontainer_component_1 = require('./posts/postcontainer.component');
var homeRoutes = [
    {
        path: 'home',
        component: postcontainer_component_1.PostsContainerComponent,
        children: [
            { path: 'posts/:id', component: postdetail_component_1.PostDetailComponent },
            { path: 'posts', component: postlist_component_1.PostsListComponent },
        ]
    }
];
exports.homeRouting = router_1.RouterModule.forChild(homeRoutes);
//# sourceMappingURL=home.routing.js.map