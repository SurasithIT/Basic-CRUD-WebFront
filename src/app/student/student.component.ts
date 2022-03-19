import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../cores/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  formGroup: FormGroup;
  students: Array<any> = [];
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      studentId: ['', Validators.required],
    })

    this.getStudents();
  }

  ngOnInit(): void {
  }

  getStudents() {
    this.studentService.getStudents().subscribe(response => {
      this.students = response?.results || []
    })
  }

  getStudent(studentKey: number) {
    this.studentService.getStudent(studentKey).subscribe(response => {
      console.log(response)
    })
  }

  addStudent() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }

    const firstName = this.formGroup.get("firstName")?.value
    const lastName = this.formGroup.get("lastName")?.value
    const studentId = this.formGroup.get("studentId")?.value

    this.studentService.addStudent(firstName, lastName, studentId).subscribe(response => {
      console.log(response)
      this.getStudents();
    })
  }

  editStudent(studentKey: number, student: any) {
    if (this.formGroup.invalid) {
      return;
    }

    const firstName = this.formGroup.get("firstName")?.value
    const lastName = this.formGroup.get("lastName")?.value
    const studentId = this.formGroup.get("studentId")?.value

    this.studentService.editStudent(studentKey, firstName, lastName, studentId).subscribe(response => {
      console.log(response)
      this.getStudents();
    })
  }

  deleteStudent(studentKey: number) {
    this.studentService.deleteStudent(studentKey).subscribe(response => {
      console.log(response)
      this.getStudents();
    })
  }

}
