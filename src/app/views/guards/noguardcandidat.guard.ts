import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthcandidatService } from '../services/authcandidat.service';

@Injectable({
  providedIn: 'root'
})
export class NoguardcandidatGuard implements CanActivateChild {
  constructor(private aus:AuthcandidatService,private router:Router){
    

  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve,reject)=>{
      if(this.aus.userLoggedIn()==false){
        resolve(true)
      }
      else{
        resolve(false)
        this.router.navigate(['/'])
      }
    })
  }
  
}
