import { Ingredient } from "src/app/shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Mango', 5)
      ]
    
    getIngredient() {
        return this.ingredients.slice();
    }

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ing: Ingredient[]) {
        // for(let i of ing)
        //     this.addIngredient(i);
        this.ingredients.push(...ing);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}