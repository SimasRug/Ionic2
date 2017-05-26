import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import{RecepesComponent} from './recepes/recepes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeStartComponent} from './recepes/recipe-start/recipe-start.component';
import {RecepeDetailComponent} from './recepes/recepe-detail/recepe-detail.component';
import {RecipeEditComponent} from './recepes/recipe-edit/recipe-edit.component';
const appRoutes: Routes = [
  {path: '', redirectTo:'/recipes', pathMatch:'full'},
  {path: 'recipes', component: RecepesComponent, children: [
    {path:'', component: RecipeStartComponent },
    {path:'new', component: RecipeEditComponent},
    {path:':id', component: RecepeDetailComponent},
    {path:':id/edit', component: RecipeEditComponent}
  ] },
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
