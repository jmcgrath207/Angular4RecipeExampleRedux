import { Action} from '@ngrx/store';
import {IngredientModel} from '../../Shared/Ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {

  readonly type = ADD_INGREDIENT;


  constructor(public payload: IngredientModel) {}

}

export type ShoppingListActions = AddIngredient;
