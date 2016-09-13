"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var profile_component_1 = require('./profile/profile.component');
var messages_component_1 = require('./messages/messages.component');
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'messages', component: messages_component_1.MessagesComponent },
    { path: '**', redirectTo: 'home' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map