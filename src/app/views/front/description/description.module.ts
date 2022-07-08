import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { DescriptionRoutingModule } from './description-routing.module';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    FormsModule
  ]
})
export class DescriptionModule { }
