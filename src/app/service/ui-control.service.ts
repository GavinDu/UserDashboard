import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../vo/user.class';
@Injectable()
export class UiControlService {
  isAdmin: boolean = false;
  home: string = null;

   constructor(private http: Http) { }
   public login(username: string, password: string): Observable<User> {
        console.log(this.http);
        const headers = new Headers();
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));

        return this.http.get('/api/auth/login', {headers : headers})
            .map((response) => {
                // login successful if there's a jwt token in the response
                // console.log(`success ${password}`);
                // can consider to encrypt the password
                const user = response.json() as User;
                this.isAdmin = user.type === 'ADMIN';
                this.home = this.isAdmin ? 'usermanagement' : 'home';
                console.log(user);
                if (user) {
                  console.log("save data");
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }

    public logout() {
        // remove user from local storage to log user out
        console.log("Log out and clear data");
        localStorage.removeItem('currentUser');
    }

}
