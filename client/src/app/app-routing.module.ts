import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component'
import { BucketlistComponent } from './bucketlist/bucketlist.component'

const routes: Routes = [
  
    { path: "login", component: UserComponent },
    { path: "dashboard", component: BucketlistComponent },
    { path: "logout", component: UserComponent },
    { path: "", pathMatch: "full", redirectTo: "/login"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
