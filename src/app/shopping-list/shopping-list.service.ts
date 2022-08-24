import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Tomatoes", "1 kg"),
    new Ingredient("Apples","1 kg")
  ];

  constructor() { }

  addIngredient(ingdata: Ingredient) {
    this.ingredients.push(ingdata)
    this.ingredientsChanged.emit(this.ingredients.slice())
}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredientsFromRecipes(ingredients: Ingredient[]) {
      this.ingredients.push(...ingredients)
      this.ingredientsChanged.emit(this.ingredients.slice())
  }

}
