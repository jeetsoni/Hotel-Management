import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeServise: RecipesService) {
    
   }
   storeRecipe()
   {
    const recipe  = this.recipeServise.getRecipe();
    this.http.put('https://ng-project-recipe-5383b.firebaseio.com/recipes.json', recipe)
    .subscribe(Response => 
      {
        console.log(Response);
      })
   }
   fetchData()
   {
     this.http.get<Recipe[]>('https://ng-project-recipe-5383b.firebaseio.com/recipes.json')
     .pipe(map(recipes =>{
      return recipes.map(recipe => {
        return {... recipe, ingrediants: recipe.ingrediants ? recipe.ingrediants : []};
      });
     })
     )
     .subscribe(recipe => {
       this.recipeServise.setRecipe(recipe);
     })
   }
}
