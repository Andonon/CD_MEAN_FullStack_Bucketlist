import { Component, OnInit } from '@angular/core';
import { Bucket } from './../../bucket'
import { BucketlistService } from './../bucketlist.service'
import { Router } from '@angular/router' 

@Component({
  selector: 'app-bucketlistdetail',
  templateUrl: './bucketlistdetail.component.html',
  styleUrls: ['./bucketlistdetail.component.css']
})
export class BucketlistdetailComponent implements OnInit {
  currbucketlist: Array<Bucket>
  
  constructor(private bucketlistservice: BucketlistService, private router: Router) { }

  ngOnInit() {
      //  this.bucketlistservice.get_curr_user_buckets()
      //   .then(data => {
      //     this.currbucketlist = data;
      //   })
  }
  
}


