import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthcandidatService } from 'src/app/views/services/authcandidat.service';
import { DataService } from 'src/app/views/services/data.service';



@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
    imageUrl="https://bootdey.com/img/Content/avatar/avatar7.png"

  
  profil:any;
  email=localStorage.getItem('username')
  row:any
  
  datacandidat={
    web:'',
    github:'',
    twitter:'',
    insta:'',
    fb:'',
    id:''
  }
  datacandidate={
    fullname:'',
    username:'',
    phone:'',
    age:'',
    adress:'',
    occupation:'',
    experience:'',
    cv:'',
    lm:'',
    id:''
  }
  constructor(private userservice:AuthcandidatService,private ds:DataService, private http:HttpClient) {}
  ngOnInit(): void {
    this.getdata()
 
  }
   onselectFile(e:any){
    if(e.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(event:any)=>{
        this.imageUrl=event.target.result
      }
    }

  }


  getdata(){
    this.userservice.profile().subscribe(data=>{
      this.profil=data
      for(var user of this.profil){
        if(user.email==this.email){
          this.row=user
        }
      }
         console.log(this.row,"myRow")
    })
  }
  getrow(web:string,github:string,twitter:string,insta:string,fb:string,id:any){
    this.datacandidat.web=web
    this.datacandidat.github=github
    this.datacandidat.twitter=twitter
    this.datacandidat.insta=insta
    this.datacandidat.fb=fb
    this.datacandidat.id=id
    console.log(this.datacandidat)

  }
  update(f:any){
    let data=f.value
    this.ds.updateCandidat(this.datacandidat.id,data).subscribe(response=>{console.log(response)
    let indexid=this.profil.findIndex((obj:any)=>obj.id==this.datacandidat.id)
    this.profil[indexid].web=this.datacandidat.web
    this.profil[indexid].github=this.datacandidat.github
    this.profil[indexid].twitter=this.datacandidat.twitter
    this.profil[indexid].insta=this.datacandidat.insta
    this.profil[indexid].fb=this.datacandidat.fb
  })
    
  }


}
