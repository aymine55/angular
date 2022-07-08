import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthcandidatService } from '../services/authcandidat.service';

@Injectable({
  providedIn: 'root'
})
export class GuardcandidatGuard implements CanActivateChild {
   constructor(private aus:AuthcandidatService,private router:Router){
    

  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve,reject)=>{
      if(this.aus.userLoggedIn()==true){
        resolve(true)
      }
      else{
        this.router.navigate(['/login'])
        localStorage.removeItem('tokencandidat')
        resolve(false)
      }
    })
  }
  
}
