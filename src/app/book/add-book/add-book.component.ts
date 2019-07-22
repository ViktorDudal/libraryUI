import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book.model';
import {HttpClient} from '@angular/common/http';
import {BookService} from '../../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = new Book();

  constructor(public http: HttpClient, private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  createBook() {
    console.log(this.book)
    this.bookService.createBook(this.book).subscribe(data => {
      this.router.navigate(['books']);
    });
  }

}
