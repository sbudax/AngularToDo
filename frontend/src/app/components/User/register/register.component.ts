import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/users/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newData :any

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private Auth:AuthService) {
    }

    registerUser(){
     
      const data ={
        username:this.form.value.username,
        email:this.form.value.email,
        password:this.form.value.password
      }

      console.table(data)

      this.newData =data;
      this.Auth.register(this.newData).subscribe((data)=>{
        console.log(data)
      });
    }
   
  ngOnInit(): void {
  }
 
}
