import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id=''
data:any

  constructor(private route:ActivatedRoute,private ds:DataService ) { 
     this.route.params.subscribe(params=>this.id=params['id'])
     this.ds.detailsOffer(this.id).subscribe(response=>{
       this.data=response
       localStorage.setItem('title',this.data.title)
      })
   
  }

  ngOnInit(): void {
    localStorage.removeItem('title')
  }

}
