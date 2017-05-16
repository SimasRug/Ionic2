import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../../recepe.model';
import {RecipeService} from '../../recipe.service';
@Component({
  selector: 'app-recepe-item',
  templateUrl: './recepe-item.component.html',
  styleUrls: ['./recepe-item.component.css']
})
export class RecepeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }


}
