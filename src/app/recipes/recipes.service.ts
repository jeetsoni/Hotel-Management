import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingrediants } from '../shared/ingrediants.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipechanged = new EventEmitter<Recipe[]>();
  recipes: Recipe[] = [
    // new Recipe('A Test Recipe', 
    // 'This is simply a text', 
    // 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
    // [
    //   new Ingrediants('extraa-chees',1)
    // ]),

    // new Recipe('A Test2 Recipe', 
    // 'This is simply a text2', 
    // 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
    // [
    //   new Ingrediants('ketchup',5),
    //   new Ingrediants('ketchup',5),
    //   new Ingrediants('ketchup',5),
    // ])
    
  ];
  constructor() { }
  setRecipe(recipes: Recipe[])
  {
    this.recipes = recipes;
    this.recipechanged.next(this.recipes);
  }
  getRecipe()
  {
    return this.recipes.slice();
  }
  gettRecipe(index: number)
  {
    return this.recipes[index];
  }
  addRecipe(recipe: Recipe)
  {
    // console.log(recipe);
    this.recipes.push(recipe);
    // console.log(this.recipes);
    this.recipechanged.emit(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe)
  {
    this.recipes[index] = newRecipe; 
    this.recipechanged.emit(this.recipes.slice());

  }
  deleteRecipe(index: number)
  {
    this.recipes.splice(index,1);
    this.recipechanged.emit(this.recipes.slice());
  }
}
