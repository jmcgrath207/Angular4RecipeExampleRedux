import {Component, OnInit} from '@angular/core';
import {IngredientModel} from '../Shared/Ingredient.model';
import {ShoppingListService} from '../services/shoppingList.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as fromShoppingList from './store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingListState: Observable<{ingredients: IngredientModel[]}>;

  constructor(private slService: ShoppingListService,
              private store: Store<fromShoppingList.AppState>) {}

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }


}
