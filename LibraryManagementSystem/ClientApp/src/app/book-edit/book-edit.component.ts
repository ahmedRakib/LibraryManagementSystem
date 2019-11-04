import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup; 
  bookId: number;  
  errorMessage: any;  
  constructor(private _fb: FormBuilder,private _avRoute : ActivatedRoute, private bookService : BookService) {
    if (this._avRoute.snapshot.params["id"]) {  
      this.bookId = this._avRoute.snapshot.params["id"];  
  } 

    this.bookForm = this._fb.group({
    bookId: this.bookId,
    title: [''],  
    author: [''],  
    price: ['']
})  
}

    

  


  ngOnInit() {

    this.bookService.getBookById(this.bookId)  
    .subscribe(resp => this.bookForm.setValue(resp)  
    , error => this.errorMessage = error);
  }

edit()
{
  const book = {
    BookId: this.bookId,
    Title: this.bookForm.controls.title.value,
    Author: this.bookForm.controls.author.value,
    Price: this.bookForm.controls.price.value,
  }
  //Call saveBook service
  this.bookService.editBook(book).subscribe(response => {

    console.log(response[0].status);
    //this.spinner.hide();
    if (response[0].status == 200) { //Status code 200 is OK
      console.log("response is: " + response);
      // this.toastr.success("", 'Successfully saved');
      // this.spinner.hide();

      //To reset the form
      this.bookForm.reset();
    }
    // else if (response[0].status == 500) {
    //   this.toastr.success("", 'Bank Code already exist'); //not working
    //   this.spinner.hide();
    // }
    // else {
    //   this.spinner.hide();
    //   this.toastr.error("", "Not Saved");
    // }
  });
}

}
