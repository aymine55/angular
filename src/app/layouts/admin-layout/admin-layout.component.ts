import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  username:any


  constructor(private x:AuthadminService, private route:Router) {
    

    this.username=this.x.getUsername()

   }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }

 

}
