import * as fromShopping from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

export interface AppState {
  shoppingList: fromShopping.State;
  auth: fromAuth.State;
}
