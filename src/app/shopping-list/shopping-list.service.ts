import { Injectable, EventEmitter } from '@angular/core';
import { Ingrediants } from '../shared/ingrediants.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingrediants[]>();
  editedItem = new Subject<number>();
  ingredients: Ingrediants[] = [
    new Ingrediants('apples', 5),
    new Ingrediants('tomatos', 10)
  ];
  constructor() { }

  getIngrediants()
  {
    return this.ingredients.slice();
  }
  addIngrediants(ingr: Ingrediants)
  {
    this.ingredients.push(ingr);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  addShopingistIngre(ingre: Ingrediants[])
  {
    this.ingredients.push(...ingre);
    this.ingredientChanged.emit(this.ingredients.slice());

  }
  getItem(index: number)
  {
    return this.ingredients[index];
  }
  updateItem(index: number, item: Ingrediants)
  {
    console.log("i am in function");
    this.ingredients[index] = item;
    this.ingredientChanged.next(this.ingredients.slice());
  }
  deleteItem(index: number)
  {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
