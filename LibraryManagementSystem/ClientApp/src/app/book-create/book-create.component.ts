import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
  
})
export class BookCreateComponent implements OnInit {

  ngOnInit() {
  }



  constructor(private bookService : BookService) {
    
  }

  bookCreateForm = new FormGroup({
    bookTitle: new FormControl(''),
    bookAuthor: new FormControl(''),
    bookPrice: new FormControl(''),
  });

save()
{
  const book = {
    Title: this.bookCreateForm.controls.bookTitle.value,
    Author: this.bookCreateForm.controls.bookAuthor.value,
    Price: this.bookCreateForm.controls.bookPrice.value,
  }
  //Call saveBook service
  this.bookService.saveBook(book).subscribe(response => { });
}

 

}



