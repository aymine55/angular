import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests/requests.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PdfViewerModule } from 'ng2-pdf-viewer';




@NgModule({
  declarations: [
    RequestsComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    PdfViewerModule
    
  ]
})
export class RequestsModule { }
