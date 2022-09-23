import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from './recipe.model';

@Injectable()
export class DataStorageService {
  RECIPE_URL =
    'https://recipeapp-59196-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    // .put - overwrites existing data in database - depends on API
    // subscribing here because header might not need this data
    this.http
      .put(this.RECIPE_URL, recipes)
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.RECIPE_URL).subscribe((recipes) => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
