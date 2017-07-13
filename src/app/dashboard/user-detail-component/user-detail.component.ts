import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { UsersService } from '../../service';
import { Role } from '../../vo/role.class';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.scss']
})

export class UserDetailComponent implements OnInit {
  public allRoles: Array<Role>;
  public allRolesOfUser: Array<Role>;
  public userId: number;
  public userName: string;
  public userType: string;
  public constructor(private userService: UsersService,
                     private route: ActivatedRoute) {}
  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      Observable.forkJoin(
            this.userService.getAllRoles(),
            // test by user id
            this.userService.getAllRolesById(this.userId)).subscribe((mergeRoles) => {
                this.allRoles = mergeRoles[0];
                this.allRolesOfUser = mergeRoles[1];
                this.allRoles.forEach(role => {
                  for (const other of this.allRolesOfUser) {
                    if (other.auth === role.auth) {
                      role.enable = true;
                    }
                  }
                });
              });
    });

    // get current user by usserId
    this.userService.getUserById(this.userId).subscribe(user => {
      this.userName = user.username;
      this.userType = user.type;
    });
  }
}
