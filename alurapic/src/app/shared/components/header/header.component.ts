import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  user$: Observable<User> = new Observable<User>();


  constructor( private userService: UserService,
               private route: Router) {

    this.user$ = userService.getUser();

  }

  logout() {
    this.userService.logout();
    this.route.navigate(['']);
  }


}
