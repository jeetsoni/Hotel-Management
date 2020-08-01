import { Component, OnInit } from '@angular/core';
import { Ingrediants} from '../shared/ingrediants.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingrediants[];
  constructor(private SlIngr: ShoppingListService) { }

  ngOnInit() {
   this.ingredients =  this.SlIngr.getIngrediants();
   this.SlIngr.ingredientChanged.subscribe(
     (ingredients: Ingrediants[]) => {
       this.ingredients = ingredients;
     }
   )
  }
  onEdit(index: number)
  {
    this.SlIngr.editedItem.next(index);
  }
  
  
}
