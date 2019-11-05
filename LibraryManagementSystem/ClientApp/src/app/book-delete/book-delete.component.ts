import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  bookForm: FormGroup;
  bookId: number;
  bookStatus: string;
  errorMessage: any;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private bookService: BookService) {
    if (this._avRoute.snapshot.params["id"]) {
      this.bookId = this._avRoute.snapshot.params["id"];
    }

    this.bookForm = this._fb.group({
      bookId: this.bookId,
      title: [''],
      author: [''],
      price: [''],
      status: ['']
    })
  }






  ngOnInit() {

    this.bookService.getBookById(this.bookId)
      .subscribe(resp => this.bookForm.setValue(resp)
        , error => this.errorMessage = error);
  }

  delete() {
    
    //Call delete service
    this.bookService.deleteBook(this.bookId).subscribe(response => { });
    this.bookForm.reset();
  }

}
