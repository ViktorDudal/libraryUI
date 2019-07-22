import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {APP_CONFIG, IAppConfig} from '../app.config';
import {Observable} from 'rxjs';
import {Book} from '../models/book.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  })
};

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  private bookUrl = 'http://localhost:8080/books';

  public getAllBooks(): Observable<any> {
    return this.http.get<Book[]>(this.bookUrl + '/all', httpOptions);
  }

  public deleteById(book: any) {
    return this.http.delete(this.bookUrl + '/delete/' + book.bookId, httpOptions);
  }

  public createBook(book: any) {
    return this.http.post<Book>(this.bookUrl + '/create', book, httpOptions);
  }
}
