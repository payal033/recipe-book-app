import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') ingNameRef: ElementRef;
  @ViewChild('quantity') ingQuantityRef: ElementRef;

  @Output() ingAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    this.ingAdded.emit(new Ingredient(this.ingNameRef.nativeElement.value, this.ingQuantityRef.nativeElement.value))
  }

}
