import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { ElementRef } from "@angular/core";
//import { Output } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
//import { EventEmitter } from "@angular/core";
import { ShoppingListService } from "src/app/shoppinglist/shopping-list.service";
//import { RecipeService } from "src/app/recipes/recipe.service";

@Component({
  selector: 'app-shoppinglist-edit',
  templateUrl: './shoppinglist-edit.component.html',
  styleUrls: ['./shoppinglist-edit.component.css']
})
export class ShoppinglistEditComponent implements OnInit {
 // @Output() addIngredient= new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  addIng() {
    const ing = this.nameInput.nativeElement.value;
    const amo = this.amountInput.nativeElement.value;
    const newIng = new Ingredient(ing, amo);
    this.shoppinglistService.addIngredient(newIng);
    // const ing = this.nameInput.nativeElement.value;
    // const amo = this.amountInput.nativeElement.value;
    // const newIng = new Ingredient(ing, amo);
    // this.addIngredient.emit(newIng);

  }
}
