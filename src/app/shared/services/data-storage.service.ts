import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';
import { AuthService } from './auth.service';

@Injectable()
export class DataStorageService {
  RECIPE_URL =
    'https://recipeapp-59196-default-rtdb.firebaseio.com/recipes.json';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    // .put - overwrites existing data in database - depends on API
    // subscribing here because header might not need this data
    this.http
      .put(this.RECIPE_URL, recipes)
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        // console.log(user);
        return this.http.get<Recipe[]>(this.RECIPE_URL, {
          params: new HttpParams().set('auth', user.token),
        });
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
