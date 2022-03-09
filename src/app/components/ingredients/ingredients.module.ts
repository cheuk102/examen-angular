import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './ingredients.component';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { MealsDetailComponent } from './meals-detail/meals-detail.component';



@NgModule({
  declarations: [
    IngredientsComponent,
    MealsDetailComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule
  ]
})
export class IngredientsModule { }
