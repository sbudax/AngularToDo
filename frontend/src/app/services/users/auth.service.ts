import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data :any){

    return this.http.post('localhost:4000/user/signup',data,{responseType: 'json'});

  }

}
