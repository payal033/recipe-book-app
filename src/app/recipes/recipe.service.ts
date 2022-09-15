import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../shared/recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Frozen Chocolate-Covered Bananas',
      `PREP TIME - 20 mins COOK TIME - 2 mins CHILL TIME - 2 h - TOTAL TIME - 2 hrs 22 mins 
      SERVINGS - 6 to 8 servings
      |
      Method: 
      Prep the pan and water: 
            Cover a quarter sheet pan with parchment paper. 
            Add 2 inches of water to a double boiler or small saucepan and bring to a simmer over medium heat. 
            Once the water is simmering, turn the heat down to low.
            Slice the bananas and chop the chocolate: 
            Meanwhile, peel the bananas, trim the ends, and slice them into 1/2-inch slices. Arrange evenly spaced on the sheet pan.
            Wipe off the knife and cutting board and finely chop the chocolate
            Melt the chocolate with the oil: 
      Add the chopped chocolate and canola oil to a small heatproof glass or metal bowl that fits snugly over the pan of simmering water. Place the bowl on top of the pot of water and use a flexible spatula to stir the chocolate until melted and no solids remain, about 2 minutes. 
      
      Remove the bowl from the heat and dry the bottom of the bowl.
      Coat the banana slices in chocolate: 
      Coat the tines of a fork in melted chocolate and set a slice of banana on top. Use a flexible spatula or spoon to spoon chocolate over the banana slice, completely covering it. 
      
      Nudge the banana slice to the front of the fork and scrape the bottom of the fork against the side of the bowl, removing excess chocolate.
      
      Slide the chocolate-covered banana slice onto the parchment-covered sheet pan. Continue with the remaining banana slices, scraping the bowl as needed. 
      
      Sprinkle with optional toppings before the chocolate hardens, if desired.
      
      Freeze: 
      Transfer the sheet pan to the freezer and freeze for 2 hours. Either serve immediately or store the chocolate-covered bananas in a freezer-safe container for up to 2 months. 
      `,
      'https://www.simplyrecipes.com/thmb/IaXc4nCJNcd2Dslen5mYVVrXXs0=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Frozen-Chocolate-Bananas-Lead-6-cd06ff3053ba488fb4f6e87dfedade6e.jpg',

      [
        new Ingredient('medium ripe bananas', '2'),
        new Ingredient('ounces dark chocolate', '6'),
        new Ingredient('teaspoons canola oil', '1 or 1/2'),
        new Ingredient('Flaky salt', '1 spoon'),
        new Ingredient(
          'sprinkles - nuts, or shredded coconut for topping',
          'as per taste'
        ),
      ]
    ),

    new Recipe(
      'Chocolate-Covered Bananas',
      `PREP TIME - 20 mins COOK TIME - 2 mins CHILL TIME - 2 h - TOTAL TIME - 2 hrs 22 mins 
      SERVINGS - 6 to 8 servings
      |
      Method: 
      Prep the pan and water: 
            Cover a quarter sheet pan with parchment paper. 
            Add 2 inches of water to a double boiler or small saucepan and bring to a simmer over medium heat. 
            Once the water is simmering, turn the heat down to low.
            Slice the bananas and chop the chocolate: 
            Meanwhile, peel the bananas, trim the ends, and slice them into 1/2-inch slices. Arrange evenly spaced on the sheet pan.
            Wipe off the knife and cutting board and finely chop the chocolate
            Melt the chocolate with the oil: 
      Add the chopped chocolate and canola oil to a small heatproof glass or metal bowl that fits snugly over the pan of simmering water. Place the bowl on top of the pot of water and use a flexible spatula to stir the chocolate until melted and no solids remain, about 2 minutes. 
      
      Remove the bowl from the heat and dry the bottom of the bowl.
      Coat the banana slices in chocolate: 
      Coat the tines of a fork in melted chocolate and set a slice of banana on top. Use a flexible spatula or spoon to spoon chocolate over the banana slice, completely covering it. 
      
      Nudge the banana slice to the front of the fork and scrape the bottom of the fork against the side of the bowl, removing excess chocolate.
      
      Slide the chocolate-covered banana slice onto the parchment-covered sheet pan. Continue with the remaining banana slices, scraping the bowl as needed. 
      
      Sprinkle with optional toppings before the chocolate hardens, if desired.
      
      Freeze: 
      Transfer the sheet pan to the freezer and freeze for 2 hours. Either serve immediately or store the chocolate-covered bananas in a freezer-safe container for up to 2 months. 
      `,
      'https://www.simplyrecipes.com/thmb/IaXc4nCJNcd2Dslen5mYVVrXXs0=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Frozen-Chocolate-Bananas-Lead-6-cd06ff3053ba488fb4f6e87dfedade6e.jpg',

      [
        new Ingredient('medium ripe bananas', '2'),
        new Ingredient('ounces dark chocolate', '6'),
        new Ingredient('teaspoons canola oil', '1 or 1/2'),
        new Ingredient('Flaky salt', '1 spoon'),
        new Ingredient(
          'sprinkles - nuts, or shredded coconut for topping',
          'as per taste'
        ),
      ]
    ),
  ];

  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingService: ShoppingListService) {}

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
