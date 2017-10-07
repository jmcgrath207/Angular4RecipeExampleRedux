
import * as ShoppingListActions from './shopping-list.actions';

import {IngredientModel} from '../../Shared/Ingredient.model';

export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: IngredientModel[];
  editedIngredient: IngredientModel;
  editedIngredientIndex: number;
}


const initialState: State = {
  ingredients:  [
  new IngredientModel('Apples', 5),
  new IngredientModel('Pinapple', 3),
  new IngredientModel('Tomatoes', 4) ],
  editedIngredient: null,
  editedIngredientIndex: -1
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
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updateIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };
      const ingredients = [...state.ingredients];
      ingredients[state.editedIngredientIndex] = updateIngredient;
      return {...state,
      ingredients: ingredients
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: oldIngredients
              };
    case ShoppingListActions.START_EDIT:
      const editIngredient = {...state.ingredients[action.payload]};
      return {
        ...state,
        editedIngredient: editIngredient,
        editedIngredientIndex: action.payload
      };
    default:
      return state;
  }
}
