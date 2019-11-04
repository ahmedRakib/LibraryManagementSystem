import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  public bookList: Book[];  
  constructor(private bookService: BookService) { }

  ngOnInit() {
    //this.bookService.getBooks().subscribe((data) => {
    //  this.bookList = data;

    //  console.log("hehehehe" + this.bookList[0].price);

    //})
  }

  onOptionsSelected(value: string) {
    console.log("the selected value is " + value);
    this.bookService.getBooksByStatus(value).subscribe((data) => {
      this.bookList = data;

      console.log("hehehehe" + this.bookList[0].price);

    })
  }

}

interface Book {
  bookId: number;
  title: string;
  author: string;
  price: number;
  status: string;
}

