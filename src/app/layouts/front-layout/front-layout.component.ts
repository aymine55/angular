import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthcandidatService } from 'src/app/views/services/authcandidat.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {
  username:any
  constructor(public au:AuthcandidatService,private route:Router) {
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('tokencandidat')
    this.route.navigate(['/login'])
  }

}
