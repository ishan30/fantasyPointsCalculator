import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsGridDataComponent } from '../points-grid-data/points-grid-data.component';
import { PointsCalculatorComponent } from '../points-calculator/points-calculator.component';
const routes: Routes = [

  { path: 'dashboard' , component : PointsGridDataComponent},
  { path: 'addPlayerScore' , component: PointsCalculatorComponent},


];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
