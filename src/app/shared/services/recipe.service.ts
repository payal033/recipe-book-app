import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [];

  private recipeTypes = [
    'Appetizer',
    'Bread',
    'Breakfast',
    'Dessert',
    'Drink',
    'Main Dish',
    'Salad',
    'Sauce/Salsa',
    'Side Dish',
    'Snack',
    'Soup',
    'Wrap/Sandwich',
  ];

  recipesChanged = new Subject<Recipe[]>();
  constructor(private shoppingService: ShoppingListService) {}

  getRecipeTypes() {
    return this.recipeTypes;
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(idx: number) {
    return this.recipes[idx];
  }

  addRecipesToShopList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredientsFromRecipes(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
