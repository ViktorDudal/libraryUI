import {Book} from './book.model';

export class Author {

  authorId: BigInteger;

  name: string;

  surname: string;

  books: Book[] = [];

}
