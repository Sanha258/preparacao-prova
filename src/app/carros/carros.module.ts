import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { ListagemCarrosComponent } from './lista/listagem-carros/listagem-carros.component';
import { EstoqueMontadoraComponent } from './montadoras/estoque-montadora/estoque-montadora.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListagemCarrosComponent,
    EstoqueMontadoraComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    FormsModule

  ]
})
export class CarrosModule { }
