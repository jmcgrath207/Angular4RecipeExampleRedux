
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
        ingredients: [...state.ingredients, action.payload]  /*returns current state of ingredents  list
                                                              plus new ingredients to be added then*/
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index];
      const updateIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };
      const ingredients = [...state.ingredients];
      ingredients[action.payload.index] = updateIngredient;
      return {...state,
      ingredients: ingredients
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(action.payload, 1);
      return {
        ...state,
        ingredients: oldIngredients
              };
    default:
      return state;
  }
}
