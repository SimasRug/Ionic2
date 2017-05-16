import { Component, OnInit } from '@angular/core';
import {Recipe} from './recepe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recepes',
  templateUrl: './recepes.component.html',
  styleUrls: ['./recepes.component.css'],
  providers: [RecipeService]
})
export class RecepesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
