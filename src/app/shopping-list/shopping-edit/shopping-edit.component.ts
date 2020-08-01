import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingrediants } from 'src/app/shared/ingrediants.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: FormControl;
  constructor(private ingr: ShoppingListService) { }
  subscription : Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingrediants;
  ngOnInit() {
   this.subscription =  this.ingr.editedItem.subscribe(
      (index) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.ingr.getItem(this.editItemIndex);
        this.slForm.setValue({
          'name': this.editItem.name,
          'amount': this.editItem.amount
        })
      }
    )
  }
  onAdd(form : NgForm)
  {
    const value = form.value;
    const ingrediants = new Ingrediants(value.name,value.amount); 
    if(this.editMode)
    {
      this.ingr.updateItem(this.editItemIndex,ingrediants);
    }
    else{
    this.ingr.addIngrediants(ingrediants);
    }
    this.editMode = false;
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.onClear();
    this.ingr.deleteItem(this.editItemIndex);
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
