import { Component, OnInit } from '@angular/core';
import {Author} from '../../models/author.model';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthorService} from '../../services/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  author: Author = new Author();

  constructor(public http: HttpClient, private authorService: AuthorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const activeAuthor = this.route.snapshot.paramMap.get('authorId');
    if (activeAuthor != null) {
      this.authorService.findAuthorById(activeAuthor)
        .subscribe(data => {
          this.author = data;
        });
    }
  }

  createAuthor() {
    this.authorService.createAuthor(this.author)
      .subscribe(data => {
      this.router.navigate(['authors']);
    });
  }

  updateAuthor() {
    this.authorService.updateAuthor(this.author)
      .subscribe(data => {
        this.router.navigate(['authors']);
      });
  }
}
