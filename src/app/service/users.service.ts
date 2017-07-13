import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../vo/user.class';
import { Role } from '../vo/role.class';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {
  private usersUrl: string = '/api/users';
  private userUrlById: string = '/api/users/${userId}';
  private rolesUrl: string = '/api/roles';
  private rolesUrlById: string = '/api/users/${userId}/roles';
  constructor(private http: Http) { }
  public getAllUsers(): Observable<Array<User>> {
    return this.http.get(this.usersUrl).map(resp => { return resp.json(); });
  }
  public getAllRoles(): Observable<Array<Role>> {
    return this.http.get(this.rolesUrl).map(resp => { return resp.json(); });
  }
  public getAllRolesById(userId: number): Observable<Array<Role>> {
    return this.http.get(this.rolesUrlById.replace(/\${userId}/g, userId.toString())).map(resp => { return resp.json(); });
  }
  public getUserById(userId: number): Observable<User> {
    return this.http.get(this.userUrlById.replace(/\${userId}/g, userId.toString())).map(resp => { return resp.json(); });
  }
}
