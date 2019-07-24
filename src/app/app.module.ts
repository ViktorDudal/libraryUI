import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService } from './services/book.service';
import { AddBookComponent } from './book/add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { AuthorComponent } from './author/author.component';
import { AddAuthorComponent } from './author/add-author/add-author.component';
import { AuthorService } from './services/author.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AddBookComponent,
    AuthorComponent,
    AddAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
