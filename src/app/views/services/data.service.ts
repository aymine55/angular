import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {






  constructor(private http:HttpClient) { }


  getOffres(){
    return this.http.get('http://127.0.0.1:8000/api/offres')
  }
  getCandidatures(){
    return this.http.get('http://127.0.0.1:8000/api/formulaires')
  }
  AddCandidatures(profile:any){
    return this.http.post('http://127.0.0.1:8000/api/formulaires',profile)
 }
 deleteCandidatures(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/formulaires/'+id)

 }
  AddOffer(profile:any){
    return this.http.post('http://127.0.0.1:8000/api/offres',profile)
 }
  Addinterview(profile:any){
    return this.http.post('http://127.0.0.1:8000/api/interviews',profile)
 }
 deleteOffer(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/offres/'+id)

 }
 updateOffer(id:any,newprofile:any){
   return this.http.patch('http://127.0.0.1:8000/api/offres/'+id,newprofile)
 }
 detailsOffer(id:any){
       return this.http.get('http://127.0.0.1:8000/api/offres/'+id)
      }
      updateCandidat(id:any,newprofile:any){
   return this.http.patch('http://127.0.0.1:8000/api/users/'+id,newprofile)
 }
}
