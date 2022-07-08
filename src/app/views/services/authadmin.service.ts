import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthadminService {
  
   



  helper=new JwtHelperService()
  roles=''
  constructor(private http:HttpClient) {

   }


    login(data:any){
     return this.http.post('http://localhost:8000/api/login',data)
   }
   
   saveDataProfile(token:any){
     let decodeToken=this.helper.decodeToken(token)

     localStorage.setItem('token',token)
    }

   getUsername(){
     let token:any=localStorage.getItem('token')
     let decodeToken= this.helper.decodeToken(token)
     
     return decodeToken.username
   }
   
   LoggedIn(){
     let token:any=localStorage.getItem('token')
     if(!token){
       return false
     }

     let decodeToken=this.helper.decodeToken(token)


     if(decodeToken.roles!="ROLE_ADMIN,ROLE_USER"){
       return false
     }

     if(this.helper.isTokenExpired(token)){
       return false
     }

     return true
   }
}
