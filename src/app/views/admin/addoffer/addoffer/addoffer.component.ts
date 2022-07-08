import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent implements OnInit {

  constructor(private ds:DataService,private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    console.log(data)
   this.ds.AddOffer(data).subscribe(data=>{
     this.route.navigate(['/admin/offers'])
   })
  }

}
