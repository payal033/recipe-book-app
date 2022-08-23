import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') ingNameRef: ElementRef;
  @ViewChild('quantity') ingQuantityRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    const ingredient = new Ingredient(this.ingNameRef.nativeElement.value, this.ingQuantityRef.nativeElement.value)
    this.shoppingListService.addIngredient(ingredient)
  
  }

}
