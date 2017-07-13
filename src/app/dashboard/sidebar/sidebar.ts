import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UiControlService } from '../../service';
import { User } from '../../vo/user.class';
import { WebsocketService } from '../../service/websocket.service';

@Component({
  selector: 'sidebar-cmp',
  templateUrl: './sidebar.html',
  providers: [UiControlService]
})

export class SidebarComponent implements OnInit{
  isAdmin: boolean;
  user: User;
  isChange = false;
  mainWebsiteUrl: string = 'http://localhost:7000';
  constructor(private ucs: UiControlService,
              private router: Router,
              private websocketService: WebsocketService) {
  }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser')) as User;
    this.isAdmin = this.user.type === 'ADMIN';
    this.websocketService.getFile().subscribe(file => this.isChange = true);
    console.log('Init Sidebard');
  }
  logout(): void {
    this.ucs.logout();
    this.router.navigate(['']);
  }

  onUnnew(): void {
    this.isChange = false;
  }
}
