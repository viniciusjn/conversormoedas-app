import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListagemComponent } from "./listagem/listagem.component";
import { HomeComponent } from "./home/home.component";
import { ConversorComponent } from "./conversor/conversor.component";
import { HistoricoComponent } from "./historico/historico.component";

const routes: Routes = [
    {path: "", redirectTo: 'home', pathMatch: 'full'},
    {path: "home", component: HomeComponent},
    {path: "listagem", component: ListagemComponent},
    {path: "conversor", component: ConversorComponent},
    {path: "historico", component: HistoricoComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }