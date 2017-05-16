import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recepe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recepe-list',
  templateUrl: './recepe-list.component.html',
  styleUrls: ['./recepe-list.component.css']
})
export class RecepeListComponent implements OnInit {
  recipes:Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
