import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  imageUrl="./assets/front/img/banner/ETCB.png"
  etc="etc.jpg"


  constructor() { }

  ngOnInit(): void {
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
  

}
