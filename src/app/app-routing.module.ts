import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {AddBookComponent} from './book/add-book/add-book.component';


const routes: Routes = [
  {path: 'books', component: BookComponent},
  {path: 'createBook', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
