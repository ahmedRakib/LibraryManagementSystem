import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  studentCreateForm = new FormGroup({
    name: new FormControl(''),
    class: new FormControl(''),
  });

  //method to call service to save student 
  save() {
    const student = {
      Name: this.studentCreateForm.controls.name.value,
      Class: this.studentCreateForm.controls.class.value,
    }
    //Call saveBook service
    this.studentService.saveStudent(student).subscribe(response => {

      console.log(response[0].status);
      //this.spinner.hide();
      if (response[0].status == 200) { //Status code 200 is OK
        console.log("response is: " + response);
        // this.toastr.success("", 'Successfully saved');
        // this.spinner.hide();

        //To reset the form
        this.studentCreateForm.reset();
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
