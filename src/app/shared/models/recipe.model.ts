import { Ingredient } from './ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public cookTime: string;
  public recipeType: string;
  public servings: string;
  public imageURL: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    desc: string,
    time: string,
    type: string,
    servings: string,
    imageUrl: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.cookTime = time;
    this.recipeType = type;
    this.servings = servings;
    this.imageURL = imageUrl;
    this.ingredients = ingredients;
  }
}
