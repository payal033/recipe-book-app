import { Component , Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeData: Recipe
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
      this.recipeService.recipeSelected.emit(this.recipeData)
  }

}
