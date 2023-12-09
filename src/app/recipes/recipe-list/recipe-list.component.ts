import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipies : Recipe[] = [
    new Recipe('A Test 1', 'This is simply a test', 
    'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_2240,c_limit/04102023-ratatouille-lede.jpg'
    ),
    new Recipe('A Test 2', 'This is simply a test', 
    'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_2240,c_limit/04102023-ratatouille-lede.jpg'
    ),
    new Recipe('A Test 3', 'This is simply a test', 
    'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_2240,c_limit/04102023-ratatouille-lede.jpg'
    )
  ];
  
  constructor() {}
  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
