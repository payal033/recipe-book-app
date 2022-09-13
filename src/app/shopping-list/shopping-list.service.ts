import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  editItem = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', '1 kg'),
    new Ingredient('Apples', '1 kg'),
  ];

  constructor() {}

  addIngredient(ingdata: Ingredient) {
    this.ingredients.push(ingdata);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredientsFromRecipes(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
