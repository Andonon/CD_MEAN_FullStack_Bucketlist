import { Component, OnInit } from '@angular/core';
import { User } from './../user'
import { Bucket } from './../bucket'
import { BucketlistService } from './bucketlist.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {
  bucket = new Bucket;
  current_user: User
  all_users: Array<User>

  constructor(private bucketlistservice: BucketlistService, private router: Router) { }

  ngOnInit() {
    this.bucketlistservice.get_logged_in_user()
      .then(data => {
        if(data){
          this.current_user = data;
        } else {
          this.router.navigate(["/login"])
        }
      })
      .catch(err => {});
      
    this.bucketlistservice.get_all_users()
      .then(data => {
        this.all_users = data;
      })
      .catch(err => console.log(err));
  }

  createbucket(){
    this.bucketlistservice.createbucket(this.bucket)
    .then(() => {
      this.bucket = new Bucket
    })
  }

  Logout(){
  this.bucketlistservice.logout()
    .then(() => {
      this.router.navigate(['/login']);
      this.current_user = new User
    })
  }

}
