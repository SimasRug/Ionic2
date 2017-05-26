import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recepe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  // recipeSelected = new EventEmitter<Recipe>();
  private recipes:Recipe[] = [
    new Recipe('Test', 'This is only a test','https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg', [
      new Ingredient ('Bread', 5),
      new Ingredient ('Salad', 15)
    ]),
    new Recipe('Second test', 'This is only a test','https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg',[
      new Ingredient('Apple', 6),
      new Ingredient ('Avocado', 12)
    ])
  ];
  constructor(private shoppingListService:ShoppingListService){}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index:number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
