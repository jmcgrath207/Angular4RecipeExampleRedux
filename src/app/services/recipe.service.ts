import { Injectable} from '@angular/core';
import {RecipeModel} from '../recipes/recipe.model';
import {IngredientModel} from '../Shared/Ingredient.model';
import {ShoppingListService} from './shoppingList.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<RecipeModel[]>();



  private _recipes: RecipeModel[] = [
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
  ];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: RecipeModel[]) {
    this._recipes = recipes;
    this.recipesChanged.next(this._recipes.slice());
  }

  get recipes(): RecipeModel[] {
    return this._recipes.slice();
  }

  getRecipe(id: number) {
    return this._recipes[id];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.slService.addIngredients(ingredients);

  }

  addRecipe(recipe: RecipeModel) {
    this._recipes.push(recipe);
    this.recipesChanged.next(this._recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeModel) {
    this._recipes[index] = newRecipe;
    this.recipesChanged.next(this._recipes.slice());

  }

  deleteRecipe(index: number) {
    this._recipes.splice(index, 1);
    this.recipesChanged.next(this._recipes.slice());
  }

}
