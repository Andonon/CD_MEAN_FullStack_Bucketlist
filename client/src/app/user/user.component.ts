import { Component, OnInit } from '@angular/core';
import { User } from './../user'
import { UserService } from './user.service';
import { Router } from '@angular/router'

import 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = new User;
  title = 'My Bucket List';
  current_user: User

  constructor(private userservice: UserService, private router: Router ) { }

  ngOnInit() {
    this.userservice.get_logged_in_user()
      .then(data => {
        if(data){
          this.router.navigate(["/dashboard"])
        } else {
          this.router.navigate(["/login"])
        }
      })
      .catch(err => {});
  }

  register(){
  this.userservice.register(this.user)
    .then(() => {
      this.router.navigate(['/dashboard']);
      this.user = new User
    })
  }
}
