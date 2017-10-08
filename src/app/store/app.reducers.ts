import * as fromShopping from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import {ActionReducerMap} from '@ngrx/store';
import {shoppingListReducer} from '../shopping-list/store/shopping-list.reducers';

export interface AppState {
  shoppingList: fromShopping.State;
  auth: fromAuth.State;
}


export const reducers: ActionReducerMap<AppState> = {
  shoppingList: shoppingListReducer,
  auth: fromAuth.authReducer
};
