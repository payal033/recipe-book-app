import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  faStopwatch = faStopwatch;
  faPeopleGroup = faPeopleGroup;

  @Input() recipeData: Recipe;
  @Input() index: number;

  ngOnInit(): void {}
}
