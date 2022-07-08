import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs/jobs.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class JobsModule { }
