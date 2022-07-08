import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  dataArray:any=[]
  searchText:any



  dataOffre={
    id:'',
    title:'',
    departement:'',
    description:'',
    location:'',
    salary:'',
    nature:'',
    education:'',
    experience:'',
    skill1:'',
    skill2:'',
    skill3:'',
    createdAT:'',
    updatedAt:''
    
  }
  constructor(private ds:DataService, private route:Router) {
    this.ds.getOffres().subscribe(data=>{
      console.log(data)
      this.dataArray=data})

   }

  ngOnInit(): void {
  }
  delete(id:any,i:any){
    this.ds.deleteOffer(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)
    })

  }
  getdata(title:string,departement:string,description:string,location:string,salary:string,nature:string,education:string,experience:string,skill1:string,skill2:string,skill3:string,createdAT:any,updatedAt:any,id:any){
   
    this.dataOffre.title=title
    this.dataOffre.departement=departement
    this.dataOffre.description=description
    this.dataOffre.location=location
    this.dataOffre.salary=salary
    this.dataOffre.nature=nature
    this.dataOffre.education=education
    this.dataOffre.experience=experience
    this.dataOffre.skill1=skill1
    this.dataOffre.skill2=skill2
    this.dataOffre.skill3=skill3
    this.dataOffre.createdAT=createdAT
    this.dataOffre.updatedAt=updatedAt
    this.dataOffre.id=id


    console.log(this.dataOffre)

    
  }

  
  updateOff(f:any){
    let data=f.value
    this.ds.updateOffer(this.dataOffre.id,data).subscribe(response=>
      {
        console.log(response)
        let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataOffre.id)
        this.dataArray[indexId].title=data.title
        this.dataArray[indexId].departement=data.departement
        this.dataArray[indexId].description=data.description
        this.dataArray[indexId].location=data.location
        this.dataArray[indexId].salary=data.salary
        this.dataArray[indexId].nature=data.nature
        this.dataArray[indexId].education=data.education
        this.dataArray[indexId].experience=data.experience
        this.dataArray[indexId].skill1=data.skill1
        this.dataArray[indexId].skill2=data.skill2
        this.dataArray[indexId].skill3=data.skill3



      
      })
  }
  details(id:any){
    this.route.navigate(['/admin/categories/'+id])

  }


}
