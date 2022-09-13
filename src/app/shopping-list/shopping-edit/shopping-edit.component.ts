import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingForm') shoppingListForm: NgForm;

  private subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.editItem.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          ingredientName: this.editItem.name,
          quantity: this.editItem.quantity,
        });
      }
    );
  }

  addIngredient(form: NgForm) {
    const formData = form.value;
    const newingredient = new Ingredient(
      formData.ingredientName,
      formData.quantity
    );

    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editItemIndex,
        newingredient
      );
    } else {
      this.shoppingListService.addIngredient(newingredient);
    }
    form.reset();
    this.editMode = false;
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
