import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecaudacionesComponent } from './components/recaudaciones/recaudaciones.component';
import { ReportesComponent } from './components/reportes/reportes.component';

const routes: Routes = [
  {path:'recaudaciones', component:RecaudacionesComponent},
  {path:'reportes', component:ReportesComponent},
  { path: '', redirectTo: '/recaudaciones', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
