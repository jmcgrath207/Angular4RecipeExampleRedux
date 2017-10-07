import { Action} from '@ngrx/store';
import {IngredientModel} from '../../Shared/Ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

export class AddIngredient implements Action {

  readonly type = ADD_INGREDIENT;


  constructor(public payload: IngredientModel) {}

}


export class AddIngredients implements Action {

  readonly type = ADD_INGREDIENTS;


  constructor(public payload: IngredientModel[]) {}

}

export type ShoppingListActions = AddIngredient | AddIngredients;
