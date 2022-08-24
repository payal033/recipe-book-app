import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetail: Recipe
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  addToShoppingList() {
      this.recipeService.addRecipesToShopList(this.recipeDetail.ingredients)
  }

}
