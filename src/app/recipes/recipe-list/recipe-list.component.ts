import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(private rec: RecipesService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.rec.getRecipe();
    this.subscription = this.rec.recipechanged.subscribe(
      (recipess: Recipe[]) => 
      {
        // console.log(recipess);
        this.recipes = recipess;
        console.log(this.recipes);
      }
    )
  }
  onNew(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
