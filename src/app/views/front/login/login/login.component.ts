import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthcandidatService } from 'src/app/views/services/authcandidat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datatoken:any

  constructor(private aus:AuthcandidatService, private route:Router) { }

  ngOnInit(): void {
  }
  logincandidat(f:any){
    let data=f.value
    this.aus.login(data).subscribe(data=>{
      this.datatoken=data
      this.aus.saveToken(this.datatoken.token)
      this.route.navigate(['/Candidat-Profil'])
      
    })

  }

}
