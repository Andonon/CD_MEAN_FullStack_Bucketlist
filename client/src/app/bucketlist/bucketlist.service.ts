import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { User } from './../user';
import { Bucket } from './../bucket';

import 'rxjs'

@Injectable()
export class BucketlistService {

  constructor(private http: Http) { }


  get_logged_in_user(){
    return this.http.get('/get_logged_in_user')
            .map(data => data.json())
            .toPromise();
  }
  createbucket(bucket: Bucket){
    return this.http.post('/createbucket', bucket)
            .map(data => data.json())
            .toPromise();    
  }
  get_all_users(){
    return this.http.get('/get_all_users')
            .map(data => data.json())
            .toPromise();    
  }
  logout(){
      return this.http.get('/logout')
              .map(data => data.json())
              .toPromise();
  }
  get_curr_user_buckets(){
    return this.http.get('/get_curr_user_buckets')
              .map(data => data.json())
              .toPromise();
  }
}
