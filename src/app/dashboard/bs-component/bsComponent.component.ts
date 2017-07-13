import { Component } from '@angular/core';
declare var SockJS: any;
declare var Stomp: any;
@Component({
  selector: 'bs-component',
  templateUrl: './bs-component.component.html'
})
export class BSComponentComponent {

  private stompClient: any;
  public name: string = '';
  public msgs: Array<String> = [];
    public ficoScores: Array<string> = ['Not Sure', 'Less than 500', '500-599', '600-699', '700+'];
  public connect(): void {
    let socket = new SockJS('/gs-file-websocket');
    this.stompClient = Stomp.over(socket);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      that.stompClient.subscribe('/user/topic/files', function (greeting) {
        that.msgs.push(JSON.parse(greeting.body).content);
      });
    });
  }

  public disconnect(): void {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }

  public sendName(userId: number): void {
    this.stompClient.send(`/app/apply/${userId}`, {}, JSON.stringify({ 'name': this.name }));
  }

}
