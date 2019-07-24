import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book.model';
import {HttpClient} from '@angular/common/http';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book: Book = new Book();

  constructor(public http: HttpClient, private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('bookId');
    console.log('------------Find bookId----------')
    console.log(bookId);
    if (bookId !== null) {
      this.bookService.findBookById(bookId)
        .subscribe(data => {
          this.book = data;
        });
    }
  }

  updateBook() {
    console.log(this.book)
    this.bookService.updateBook(this.book).subscribe(data => {
      this.router.navigate(['books']);
    });
  }

}
