import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCategoryRoutingModule } from './add-category-routing.module';
import { AddCategoryComponent } from './add-category/add-category.component';


@NgModule({
  declarations: [
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    AddCategoryRoutingModule
  ]
})
export class AddCategoryModule { }
