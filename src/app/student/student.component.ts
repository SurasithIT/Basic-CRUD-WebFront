import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  formGroup: FormGroup;
  students: Array<any> = [];

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      studentId: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
