import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Author} from '../models/author.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthorService {

  constructor(private http: HttpClient) { }

  private authorUrl = 'http://localhost:8080/authors';

  public getAllAuthors(): Observable<any> {
    return this.http.get<Author[]>(this.authorUrl + '/all', httpOptions);
  }

  public deleteById(author: Author) {
    return this.http.delete(this.authorUrl + '/delete/' + author.authorId, httpOptions);
  }

  public createAuthor(author: Author) {
    return this.http.post<Author>(this.authorUrl + '/create', author, httpOptions);
  }

  public updateAuthor(author: Author) {
    return this.http.put<Author>(this.authorUrl + '/update', author, httpOptions);
  }

  public findAuthorById(authorId: any) {
    return this.http.get<Author>(this.authorUrl + '/byId/' + authorId, httpOptions);
  }
}
