import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../services/author.service';
import {Author} from '../models/author.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [ AuthorService ]
})
export class AuthorComponent implements OnInit {

  authors: Author[];

  constructor(public http: HttpClient, private authorService: AuthorService) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors() {
    this.authorService.getAllAuthors().subscribe((data: Author[]) => {
      console.log(data);
      this.authors = data;
    });
  }

  deleteById(author: Author): void {
    this.authorService.deleteById(author)
      .subscribe(() => {
        console.log('author deleted');
      });
    window.location.reload();
  }

}
