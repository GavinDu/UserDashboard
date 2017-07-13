import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UiControlService } from '../service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
  selector: 'login-cmp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss'],
  providers: [UiControlService]
})

export class LoginComponent implements OnInit{
  home: string;
  error: any;
  public loginForm: FormGroup = this.fb.group({
    username: '',
    password: ''
  });
  constructor(private ucs: UiControlService,
              private fb: FormBuilder,
              private router: Router) {
    this.home = ucs.home;
  }

  ngOnInit() {
        // reset login status
        //this.ucs.logout();
    }
  doLogin(event) {
    event.preventDefault();
    this.ucs.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
                user => {
                    if (!user.enable) {
                      this.error = 'User has been locked. Please contact the Administrator.';
                    } else {
                      console.log(this.ucs.home);
                      this.router.navigate(['dashboard', this.ucs.home]);
                    }
                },
                error => {
                    if ((error as Response).status == 504) {
                      localStorage.setItem('currentUser', JSON.stringify({userId:0, username:"testUser", type:"user", enable: true}));
                      this.router.navigate(['dashboard', 'home']);
                    }
                    this.error = 'Username or password is not matched.';
                });
  }
 }
