import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected  = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe("Recipe name 1", "A description for our sample recipe 1","https://thewoksoflife.com/wp-content/uploads/2016/01/soy-sauce-butter-pasta-feature.jpg"),
    new Recipe("Recipe name 2", "A description for our sample recipe 2","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"),
    new Recipe("Recipe name 3", "A description for our sample recipe 3","https://thewoksoflife.com/wp-content/uploads/2016/01/soy-sauce-butter-pasta-feature.jpg")

  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice()
  }

}
