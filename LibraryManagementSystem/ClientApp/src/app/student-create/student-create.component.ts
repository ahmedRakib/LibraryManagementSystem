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
      if (response.status == 200) { this.studentCreateForm.reset() }
    });
  }

}
