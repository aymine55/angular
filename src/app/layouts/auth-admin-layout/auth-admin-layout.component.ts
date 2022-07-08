import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';


@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit {


  datarecive:any

  constructor(private asd:AuthadminService, private route:Router) { 
    if(this.asd.LoggedIn()==true){
      this.route.navigate(['/admin'])
    }
  }

  ngOnInit(): void {
  }
  
  loginadmin(f:any){
    let data=f.value

    this.asd.login(data).subscribe(response=>{

      this.datarecive=response
      this.asd.saveDataProfile(this.datarecive.token)
      this.route.navigate(['/admin/'])
    })

  }
  

}
