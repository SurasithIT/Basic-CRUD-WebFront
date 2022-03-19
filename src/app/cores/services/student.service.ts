import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<any> {
    return this.httpClient.get(environment.apiBasePath + "/Student")
      .pipe(map(response => {
        console.log(response)
        return response
      }));
  }

  getStudent(studentKey: number) {
    return this.httpClient.get(environment.apiBasePath + `/Student/${studentKey}`)
      .pipe(map(response => {
        console.log(response)
        return response
      }));
  }

  addStudent(firstName: string, lastName: string, studentId: string) {
    let params = {
      firstName: firstName,
      lastName: lastName,
      studentId: studentId
    }
    return this.httpClient.post(environment.apiBasePath + "/Student/", params)
      .pipe(map(response => {
        console.log(response)
        return response
      }));
  }

  editStudent(studentKey: number, firstName: string, lastName: string, studentId: string) {
    let params = {
      firstName: firstName,
      lastName: lastName,
      studentId: studentId
    }
    return this.httpClient.put(environment.apiBasePath + `/Student/${studentKey}`, params)
      .pipe(map(response => {
        console.log(response)
        return response
      }));
  }

  deleteStudent(studentKey: number) {
    return this.httpClient.delete(environment.apiBasePath + `/Student/${studentKey}`)
      .pipe(map(response => {
        console.log(response)
        return response
      }));
  }
}
