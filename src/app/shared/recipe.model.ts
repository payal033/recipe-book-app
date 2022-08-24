import { Ingredient } from "./ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imageURL: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imageUrl: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imageURL = imageUrl;
        this.ingredients = ingredients
    }
}