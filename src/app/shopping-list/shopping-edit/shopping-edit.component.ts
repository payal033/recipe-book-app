import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addIngredient(form: NgForm) {
    const formData = form.value;
    const ingredient = new Ingredient(
      formData.ingredientName,
      formData.quantity
    );
    this.shoppingListService.addIngredient(ingredient);
    form.reset();
  }
}
