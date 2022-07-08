import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddNewsRoutingModule } from './add-news-routing.module';
import { AddNewsComponent } from './add-news/add-news.component';


@NgModule({
  declarations: [
    AddNewsComponent
  ],
  imports: [
    CommonModule,
    AddNewsRoutingModule,
    FormsModule
  ]
})
export class AddNewsModule { }
