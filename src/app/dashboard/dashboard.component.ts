import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from '../service/websocket.service';
/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnDestroy, OnInit{ 
  constructor(private websocketService: WebsocketService){}
  ngOnInit() {
    this.websocketService.connect();
  }

  ngOnDestroy(){
    this.websocketService.disconnect();
  }
}
