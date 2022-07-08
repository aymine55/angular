import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  dataArray:any=[]
  searchText:any
  pdfsrc="./assets/cha3/Jendoubi aymen CV.pdf"



  constructor(private ds:DataService , private route:Router) {
    this.ds.getCandidatures().subscribe(data=>{
      console.log(data)
      this.dataArray=data})

   }

   
  ngOnInit(): void {
  }
   delete(id:any,i:any){
    this.ds.deleteCandidatures(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)
    })

  }

   interview(f:any){
    let data=f.value
    console.log(data)
   this.ds.Addinterview(data).subscribe(data)
  }

}
