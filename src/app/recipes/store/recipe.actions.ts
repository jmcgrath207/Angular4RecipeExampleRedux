
import { Action } from '@ngrx/store';
import {RecipeModel} from '../recipe.model';

export const SET_RECIPIE = 'SET_RECIPIE';
export const ADD_RECIPIE = 'ADD_RECIPIE';
export const UPDATE_RECIPIE = 'UPDATE_RECIPIE';
export const DELETE_RECIPIE = 'DELETE_RECIPIE';


export class SetRecipes implements Action {
  readonly type = SET_RECIPIE;

  constructor(public payload: RecipeModel[]) {}
}


export class AddRecipe implements Action {
  readonly type = ADD_RECIPIE;

  constructor(public payload: RecipeModel[]) {}
}

export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPIE;

  constructor(public payload: {index: number, updatedRecipe: RecipeModel}) {}
}

export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPIE;

  constructor(public payload: number) {}
}

export type RecipeActions = SetRecipes | AddRecipe | UpdateRecipe | DeleteRecipe;
