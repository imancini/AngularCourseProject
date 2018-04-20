import { Recipe } from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Cream of Mushroom Soup', 
            'A delightful creamy soup', 
            'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis',
            [
                new Ingredient('Mushroom', 5),
                new Ingredient('Coconut Milk', 1),
                new Ingredient('Carrot', 4)
            ]),
        new Recipe('Grilled Salmon', 
            'Salmon grilled with lemon and rosemary', 
            'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
            [
                new Ingredient('Salmon', 1),
                new Ingredient('Lemon Slice', 3),
                new Ingredient('Rosemary Sprig', 3),
            ]),
        new Recipe('Chicken Curry', 
            'Traditional curry chicken on a bed of rice', 
            'https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/2048x1365/gallery-1501791674-delish-chicken-curry-horizontal.jpg?resize=768:*',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Rice', 1),
                new Ingredient('Curry Sauce', 1),
            ]),
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}