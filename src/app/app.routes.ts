

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//export const routes: Routes = [
  //{path: "", redirectTo: "vacinas", pathMatch: "full"},
  //{path: "", redirectTo: "carros", pathMatch: "full"},
 // {path: "vacinas", loadChildren: () =>import("./vacinas/vacinas.module").then(m=> m.VacinasModule), },
  //{path: "carros", loadChildren: () =>import("./carros/carros.module").then(m=> m.CarrosModule), }
 //{path: "", component: ListagemCarrosComponent},


//];

export const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule {}
