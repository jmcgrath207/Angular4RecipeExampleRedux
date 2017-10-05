import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModel} from '../Shared/Ingredient.model';
import {ShoppingListService} from '../services/shoppingList.service';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  shoppingListState: Observable<{ingredients: IngredientModel[]}>;
  private subscription: Subscription;

  constructor(private slService: ShoppingListService,
              private store: Store<{shoppingList: {ingredients: IngredientModel[]}}>) {}

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
/*    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: IngredientModel[]) =>  {
        this.ingredients = ingredients;
      }
    );*/
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
