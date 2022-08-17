import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe("Recipe name", "A description for our sample recipe","https://thewoksoflife.com/wp-content/uploads/2016/01/soy-sauce-butter-pasta-feature.jpg"),
    new Recipe("Recipe name 2", "A description for our sample recipe 2","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574")

  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe)
  }

}
