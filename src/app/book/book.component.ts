import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {Book} from '../models/book.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [ BookService ]
})
export class BookComponent implements OnInit {

  books: Book[];

  constructor(public http: HttpClient, private bookService: BookService) {}

  ngOnInit()  {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  deleteById(book: Book): void {

    this.bookService.deleteById(book)
      .subscribe(() => {
      });
    window.location.reload();
  }

}
