import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from '../app.config';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Credentials': 'true',
  }), withCredentials: true
};

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private libraryEndpoint: IAppConfig) { }

  private bookUrl = this.libraryEndpoint.apiEndpoint + '/books/all';

  public findAll(): Observable<any> {
    return this.http.get(this.bookUrl, httpOptions);
  }
}
