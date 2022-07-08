import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthcandidatService } from 'src/app/views/services/authcandidat.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private aus:AuthcandidatService,private route:Router) { }

  ngOnInit(): void {
  }


  register(f:any){
    let data=f.value
    this.aus.register(data).subscribe(data=>{
      this.route.navigate(['/login'])
      console.log(data)
    })

  }

}
