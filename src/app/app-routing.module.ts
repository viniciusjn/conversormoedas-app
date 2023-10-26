import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListagemComponent } from "./listagem/listagem.component";

const routes: Routes = [
    {path: "", redirectTo: 'home', pathMatch: 'full'},
    {path: "listagem", component: ListagemComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }