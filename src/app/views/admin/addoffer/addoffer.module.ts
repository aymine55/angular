import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddofferRoutingModule } from './addoffer-routing.module';
import { AddofferComponent } from './addoffer/addoffer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddofferComponent
  ],
  imports: [
    CommonModule,
    AddofferRoutingModule,
    FormsModule
  ]
})
export class AddofferModule { }
