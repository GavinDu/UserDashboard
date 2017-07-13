import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { File } from '../vo/file.class';
import { Application } from '../vo/application.interface';

@Injectable()
export class FilesService {
  private fileUrl: string = '/api/users';
  constructor(private http: Http) {}

  public getFilesByUserId(userId: number): Observable<Array<File>> {
    console.log(userId);
    return this.http.get(`${this.fileUrl}/${userId}/files`).map(resp => resp.json());
  }

  public sendApplication(data: Application, userId: number): Observable<String> {
    // send application data
    return this.http.post(`${this.fileUrl}/${userId}/files`, data).map(resp => resp.json());
  }
}
