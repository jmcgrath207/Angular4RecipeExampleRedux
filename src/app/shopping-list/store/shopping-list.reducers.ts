
import * as ShoppingListActions from './shopping-list.actions';

import {IngredientModel} from '../../Shared/Ingredient.model';




const initialState = {
  ingredients:  [
  new IngredientModel('Apples', 5),
  new IngredientModel('Pinapple', 3),
  new IngredientModel('Tomatoes', 4) ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    default:
      return state;
  }
}
