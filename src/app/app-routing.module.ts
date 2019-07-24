import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {AddBookComponent} from './book/add-book/add-book.component';
import {UpdateBookComponent} from './book/update-book/update-book.component';
import {AuthorComponent} from './author/author.component';
import {AddAuthorComponent} from './author/add-author/add-author.component';


const routes: Routes = [
  {path: 'books', component: BookComponent},
  {path: 'authors', component: AuthorComponent},
  {path: 'createBook', component: AddBookComponent},
  {path: 'createAuthor', component: AddAuthorComponent},
  {path: 'updateBook/:bookId', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
