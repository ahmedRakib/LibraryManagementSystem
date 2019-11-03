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
  toastr: any;
  spinner: any;

 

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
  this.bookService.saveBook(book).subscribe(response => {

    console.log(response[0].status);
    //this.spinner.hide();
    if (response[0].status == 200) { //Status code 200 is OK
      console.log("response is: " + response);
      // this.toastr.success("", 'Successfully saved');
      // this.spinner.hide();

      //To reset the form
      this.bookCreateForm.reset();
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

  onClickMe() {
    // const book = {
    //   Title: this.bookCreateForm.controls.bookTitle.value,
    //   Author: this.bookCreateForm.controls.bookAuthor.value,
     
    // }
    // //Call saveBook service
    // this.bookService.saveBook(book).subscribe(response => {

    //   console.log(response[0].status);
    //   //this.spinner.hide();
    //   if (response[0].status == 200) { //Status code 200 is OK
    //     console.log("response is: " + response);
    //     // this.toastr.success("", 'Successfully saved');
    //     // this.spinner.hide();

    //     //To reset the form
    //     this.bookCreateForm.reset();
    //   }
    //   // else if (response[0].status == 500) {
    //   //   this.toastr.success("", 'Bank Code already exist'); //not working
    //   //   this.spinner.hide();
    //   // }
    //   // else {
    //   //   this.spinner.hide();
    //   //   this.toastr.error("", "Not Saved");
    //   // }
    // });
  }


}



