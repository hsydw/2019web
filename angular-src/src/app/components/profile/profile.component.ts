import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
selector: 'app-profile',
templateUrl: './profile.component.html',
styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
name: string;
username: string;
email: string;
age: Int16Array;

constructor(private authService: AuthService) { }

ngOnInit() {
 this.authService.getProfile().subscribe(profile => {
      this.name = profile.name;
      this.username = profile.username;
      this.email = profile.email;
      this.age = profile.user.age;    
    },
 err => {
      console.log(err);
      return false;
    }
);
}

}
