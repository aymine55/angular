import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
   dataArray:any=[]
   searchText:any

  constructor(private ds:DataService , private route:Router) {
    this.ds.getOffres().subscribe(data=>{
      console.log(data)
      this.dataArray=data})
   }

  ngOnInit(): void {
  }
  details(id:any){
    this.route.navigate(['/details/'+id])

  }

}
