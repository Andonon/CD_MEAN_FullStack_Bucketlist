import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserComponent } from './user/user.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';

import { UserService } from './user/user.service'
import { BucketlistService } from './bucketlist/bucketlist.service';
import { BucketlistdetailComponent } from './bucketlist/bucketlistdetail/bucketlistdetail.component';
import { BucketlistusersComponent } from './bucketlist/bucketlistusers/bucketlistusers.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BucketlistComponent,
    BucketlistdetailComponent,
    BucketlistusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		HttpModule
  ],
  providers: [UserService, BucketlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
