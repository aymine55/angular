import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatsRoutingModule } from './candidats-routing.module';
import { CandidatsComponent } from './candidats/candidats.component';


@NgModule({
  declarations: [
    CandidatsComponent
  ],
  imports: [
    CommonModule,
    CandidatsRoutingModule
  ]
})
export class CandidatsModule { }
