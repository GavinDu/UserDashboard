import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiControlService } from './ui-control.service';
import { UsersService } from './users.service';
import { FilesService } from './files.service';
import { WebsocketService } from './websocket.service';
@NgModule({
    imports: [CommonModule],
    providers: [UiControlService, UsersService, FilesService, WebsocketService],
    exports: []
})
export class ServiceModule { }
