import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book.model';
import {HttpClient} from '@angular/common/http';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = new Book();

  constructor(public http: HttpClient, private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const activeBook = this.route.snapshot.paramMap.get('bookId');
    if (activeBook != null) {
      this.bookService.findBookById(activeBook)
        .subscribe(data => {
          this.book = data;
        });
    }
  }

  createBook() {
    this.bookService.createBook(this.book)
      .subscribe(data => {
      this.router.navigate(['books']);
    });
  }

  updateBook() {
    this.bookService.updateBook(this.book)
      .subscribe(data => {
          this.router.navigate(['books']);
      });
  }
}
