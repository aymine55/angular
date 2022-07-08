import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthcandidatService {

  helper=new JwtHelperService
  constructor(private http:HttpClient) { }


  register(body:any){
    return this.http.post('http://127.0.0.1:8000/api/users',body)
  }
    profile(){
    return this.http.get('http://127.0.0.1:8000/api/users')
  }
  login(body:any){
     localStorage.setItem('username',body.username)
     return this.http.post('http://127.0.0.1:8000/api/login',body)
   }

   saveToken(token:any){
        localStorage.setItem('tokencandidat',token)
   }
  
   getUsername(){
     let token:any=localStorage.getItem('tokencandidat')
     let decodeToken= this.helper.decodeToken(token)
     
     return decodeToken.username
   }

   userLoggedIn(){
     let token:any=localStorage.getItem('tokencandidat')
     if(!token){
       return false
     }

     let decodeToken=this.helper.decodeToken(token)


     if(decodeToken.roles!="ROLE_USER"){
       return false
     }

     if(this.helper.isTokenExpired(token)){
       return false
     }

     return true
   }
   
}
