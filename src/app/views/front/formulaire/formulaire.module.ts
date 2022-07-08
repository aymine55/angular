import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaireRoutingModule } from './formulaire-routing.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    FormulaireRoutingModule,
    FormsModule
  ]
})
export class FormulaireModule { }
