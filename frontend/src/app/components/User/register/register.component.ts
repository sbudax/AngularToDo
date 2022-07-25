import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      username: [''],
      email: [''],
      password: ['']
    })
   }

  ngOnInit(): void {
  }

  registerUser(){
    var formData: any = new FormData();
    formData.append('username',this.form.get('username')?.value);
    formData.append('email',this.form.get('email')?.value);
    formData.append('password',this.form.get('password')?.value);
    this.http.post('http://localhost:4000/user/signup', formData).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    });
  }
}
