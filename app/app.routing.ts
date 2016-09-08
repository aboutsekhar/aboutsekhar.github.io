import { Routes, RouterModule }   from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound';
const appRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);