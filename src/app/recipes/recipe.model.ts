



import {IngredientModel} from '../Shared/Ingredient.model';

export class RecipeModel {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: IngredientModel[];

  constructor(name: string, description: string, imagePath: string, ingredients: IngredientModel[]  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
