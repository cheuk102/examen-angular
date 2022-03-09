import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').
    then(mod => mod.HomeModule)
  },
  {
    path: 'plates/detailMeal',
    loadChildren: () => import('./components/home/home.module').
    then(mod => mod.HomeModule)
  },
  {
    path: 'ingredients',
    loadChildren: () => import('./components/ingredients/ingredients.module').
    then(mod => mod.IngredientsModule)
  },
  {
    path: 'plates',
    loadChildren: () => import('./components/plates/plates.module').
    then(mod => mod.PlatesModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile.module').
    then(mod => mod.ProfileModule)
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
