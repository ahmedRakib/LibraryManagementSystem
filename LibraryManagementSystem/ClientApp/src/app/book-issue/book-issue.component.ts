import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { StudentService } from '../services/student.service';
import { FormGroup, FormControl } from '@angular/forms';
import { BookIssueService } from '../services/book-issue.service';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent implements OnInit {
  public bookList = [];
  public studentList = [];
  //datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(private alertService: AlertService, private bookService: BookService, private studentService: StudentService, private bookIssueService: BookIssueService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((data) => {
      this.bookList = data;

      console.log("hehehehe" + this.bookList[0].price);
    })

    this.studentService.getStudents().subscribe((data) => {
      this.studentList = data;

      console.log("hehehehe" + this.studentList[0].name);
    })
  }

  bookIssueForm = new FormGroup({
    bookId: new FormControl(''),
    studentId: new FormControl(''),
    returnDate: new FormControl(''),
    issueDate: new FormControl(''),
  });

  save() {
    this.alertService.clear();
    const bookIssue = {
      BookId: this.bookIssueForm.controls.bookId.value,
      StudentId: this.bookIssueForm.controls.studentId.value,
      ReturnDate: this.bookIssueForm.controls.returnDate.value,
      IssueDate: this.bookIssueForm.controls.issueDate.value,
    }

    console.log("bookid" + bookIssue.BookId);
    console.log("studentid" + bookIssue.StudentId);
    //Call saveBook service
    this.bookIssueService.saveBookIssue(bookIssue).subscribe(response => {

      console.log(response[0].status);
      //this.spinner.hide();
      if (response[0].status == 200) { //Status code 200 is OK
        console.log("response is: " + response);
        this.alertService.success(response[0].message);
        // this.toastr.success("", 'Successfully saved');
        // this.spinner.hide();

        //To reset the form
        this.bookIssueForm.reset();
      }
      else {
        this.alertService.error(response[0].message);
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
