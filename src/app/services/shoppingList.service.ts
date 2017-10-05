import { Injectable} from '@angular/core';
import {IngredientModel} from '../Shared/Ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  constructor() { }

  ingredientsChanged = new Subject<IngredientModel[]>();
  startedEditing = new Subject<number>();
  private _ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Pinapple', 3),
    new IngredientModel('Tomatoes', 4)

  ];


  get ingredients(): IngredientModel[] {
    return this._ingredients;
  }

  getingredient(index: number) {
    return this._ingredients[index];
  }

  addIngredient(ingredient: IngredientModel) {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.next(this._ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.next(this._ingredients.slice());
    }

  updateIngredient(index: number, newIngredient: IngredientModel) {
    this._ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this._ingredients.splice(index, 1);
    this.ingredientsChanged.next(this._ingredients.slice());
  }


}
