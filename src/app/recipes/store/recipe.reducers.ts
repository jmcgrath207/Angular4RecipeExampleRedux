
import {RecipeModel} from '../recipe.model';
import {IngredientModel} from '../../Shared/Ingredient.model';
import * as RecipeActions from './recipe.actions';


export interface FeatureState {
  recipes: State;

}

export interface State {
  recipes: RecipeModel[];
}


const initialState: State = {
   recipes: [
  new RecipeModel('A Test Recipe', 'This is simply a test',
    'https://farm9.staticflickr.com/8575/15775087589_a725c0b077_z.jpg',
    [
      new IngredientModel('meat', 1),
      new IngredientModel('french fries', 20)

    ]),
  new RecipeModel('A Test Recipe', 'This is simply a test 2',
    'https://static.pexels.com/photos/20787/pexels-photo.jpg',
    [
      new IngredientModel('Buns', 2),
      new IngredientModel('meat', 1)
    ])
] };

export function  recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case (RecipeActions.SET_RECIPIE):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPIE):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPIE) :
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPIE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
