import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinasRoutingModule } from './vacinas-routing.module';
import { VacinaDetalheComponent } from './vacina-detalhe/vacina-detalhe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VacinaDetalheComponent
  ],
  imports: [
    CommonModule,
    VacinasRoutingModule,
    FormsModule
  ]
})
export class VacinasModule { }
