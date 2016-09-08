"use strict";
var router_1 = require('@angular/router');
var pagenotfound_1 = require('./pagenotfound');
var appRoutes = [
    { path: '**', component: pagenotfound_1.PageNotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map