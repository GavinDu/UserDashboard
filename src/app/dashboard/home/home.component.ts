import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ModalDirective } from 'ng2-bootstrap';
import { FilesService } from '../../service/files.service';
import { WebsocketService } from '../../service/websocket.service';
import { File } from '../../vo/file.class';
import { User } from '../../vo/user.class';
/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
  selector: 'home-cmp',
  templateUrl: './home.component.html',
  styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('lgModal')
  public childModal: ModalDirective;
  public filename: string;

  public userId: number;
  public files: Array<File>;
  public constructor(private filesService: FilesService,
                     private route: ActivatedRoute,
                     private websocketService: WebsocketService) {}
  public ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.userId = +params['id'];
    // });
    // Not using the route params to get the userId
    // I should save my logged User information in somewhere
    // in order to gain it, when needing it.
    const user: User = JSON.parse(localStorage.getItem('currentUser')) as User;

    this.filesService.getFilesByUserId(user.userId).subscribe(files => {
      this.files = files.reverse();
    });
    this.websocketService.getFile().subscribe(file => {
      this.files.unshift(file);
    });
    console.log('Init Home');
  }

  public showChildModal(filename: string, event: Event): void {
    event.preventDefault();
    this.filename = `http://localhost:7000/docs/${filename}.pdf`;
    this.childModal.show();
  }
}
