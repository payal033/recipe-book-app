import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  faMagnifyingGlass,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent implements OnInit {
  @ViewChild('searchForm') shoppingListForm: NgForm;

  searchTerm: string;
  randomRecipe: any;
  searchedRecipes: any;
  flagSearch: boolean;
  recipeById: any;

  faMagnifyingGlass = faMagnifyingGlass;
  faShuffle = faShuffle;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSearch(form: NgForm) {
    this.flagSearch = true;
    const formData = form.value;
    this.searchTerm = formData.search.trim();
    if (this.searchTerm) {
      this.http
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchTerm}`
        )
        .subscribe((data) => {
          this.searchedRecipes = data['meals'];
          console.log(this.searchedRecipes);
        });
    } else {
      alert('Please enter a search term');
    }
    form.reset();
    this.recipeById = null;
  }

  getMealById(mealId) {
    this.http
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .subscribe((data) => {
        console.log(data);
        let meal = data['meals'][0];

        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
          if (meal[`strIngredient${i}`]) {
            ingredients.push(
              `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
          } else {
            break;
          }
        }

        this.recipeById = {
          mealName: meal['strMeal'],
          category: meal['strCategory'],
          mealImage: meal['strMealThumb'],
          instructions: meal['strInstructions'],
          ingredients: ingredients,
        };
        console.log(this.recipeById);
      });
  }

  findRandom() {
    this.flagSearch = false;
    this.http
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .subscribe((data) => {
        let meal = data['meals'][0];

        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
          if (meal[`strIngredient${i}`]) {
            ingredients.push(
              `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
          } else {
            break;
          }
        }

        this.randomRecipe = {
          mealName: meal['strMeal'],
          category: meal['strCategory'],
          mealImage: meal['strMealThumb'],
          instructions: meal['strInstructions'],
          ingredients: ingredients,
        };
      });
  }
}
