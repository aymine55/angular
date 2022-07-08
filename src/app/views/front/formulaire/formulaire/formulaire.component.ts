import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthcandidatService } from 'src/app/views/services/authcandidat.service';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
title=localStorage.getItem('title')
fullnam:any
tel:any
adr:any
exp:any
l:any
c:any
occ:any
old:any
mail:any

  constructor(private ds:DataService,private route:Router,private userservice:AuthcandidatService) { }

  ngOnInit(): void {
    this.init();
    
  }
  add(f:any){
    f.value.offre=this.title
    let data=f.value

    console.log(data)
   this.ds.AddCandidatures(data).subscribe(data=>{
     this.route.navigate(['/'])
   })
  }
  profil:any
  row:any
  username=localStorage.getItem('username')
  init(){
    this.userservice.profile().subscribe(data=>{
      this.profil=data
      for(var user of this.profil){
        if(this.username==user.username){
          this.row=user
              this.fullnam=this.row.fullname
              console.log(this.fullnam)
              this.tel=this.row.phone
              this.adr=this.row.adress
              this.exp=this.row.experience
              this.occ=this.row.occupation
              this.old=this.row.age
              this.mail=this.row.username
        }
      }
    })
  }

}
