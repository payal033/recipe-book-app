import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() recipeSelected  = new EventEmitter<void>()

  @Input() recipeData: Recipe
  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
      this.recipeSelected.emit()
  }

}
