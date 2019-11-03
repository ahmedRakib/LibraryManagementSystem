import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent implements OnInit {
  public bookList = []
  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((data) => {
      this.bookList = data;

      console.log("hehehehe" + this.bookList[0].price);

    })
  }
  save() { }

}
