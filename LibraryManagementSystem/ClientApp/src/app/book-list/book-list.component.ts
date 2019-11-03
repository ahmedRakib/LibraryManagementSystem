import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public bookList: Book[];  
  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((data) =>{
      this.bookList = data;

      console.log("hehehehe"+  this.bookList[0].price);
      
    })
  }

  // getBooks() {  
  //   this.bookService.getBooks().subscribe(  
  //       data => this.bookList = data  
  //   )  
  //   }
}

interface Book {  
  bookId: number;  
  title: string;  
  author: string;  
  price: number;  
}
