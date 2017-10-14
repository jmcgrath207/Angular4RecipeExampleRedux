
import {RecipeModel} from '../recipe.model';
import {IngredientModel} from '../../Shared/Ingredient.model';


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

export function  recipeReducer(state = initialState, action) {
  return state;
}
