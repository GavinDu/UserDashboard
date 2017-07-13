import { Injectable } from '@angular/core';
import { Application } from '../vo/application.interface';
import { Observable, Subject } from 'rxjs/Rx';
import { File } from '../vo/file.class';
declare var SockJS: any;
declare var Stomp: any;

@Injectable()
export class WebsocketService {
  private stompClient: any;
  private name: string;
  private subject: Subject<File> = new Subject<File>();
  // public msgs: Array<String> = [];
  public connect(): void {
    const socket = new SockJS('/gs-file-websocket');
    this.stompClient = Stomp.over(socket);
    const that = this;
    this.stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      that.stompClient.subscribe('/user/topic/files', function (file) {
        that.subject.next(JSON.parse(file.body));
      });
    });
  }

  public disconnect(): void {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
    console.log('Disconnected');
  }

  public send(jsonData: any, userId: number): void {
    this.stompClient.send(`/app/apply/${userId}`, {}, jsonData);
  }

  public getFile(): Observable<File> {
    return this.subject.asObservable();
  }
}
