import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { StudentService } from '../services/student.service';
import { FormGroup, FormControl } from '@angular/forms';
import { BookIssueService } from '../services/book-issue.service';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent implements OnInit {
  public bookList = [];
  public studentList = [];

  
  constructor(private bookService: BookService, private studentService: StudentService, private bookIssueService: BookIssueService) { }

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

    });
  }

}
