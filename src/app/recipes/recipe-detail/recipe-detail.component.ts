import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id: number;
  constructor(private slS: ShoppingListService,
    private recipeSer: RecipesService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeSer.gettRecipe(this.id);

      }
    );
  }
  onAddTohoppingList(){
    this.slS.addShopingistIngre(this.recipe.ingrediants);
  }
  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDelete()
  {
    this.recipeSer.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
