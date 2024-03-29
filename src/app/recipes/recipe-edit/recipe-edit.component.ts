import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  recipeTypes = [];
  faXmark = faXmark;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeTypes = this.recipeService.getRecipeTypes();
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
    });
    this.initForm();
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeCookTime = '';
    let recipeType = '';
    let recipeServings = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imageURL;
      recipeDescription = recipe.description;
      recipeCookTime = recipe.cookTime;
      recipeType = recipe.recipeType;
      recipeServings = recipe.servings;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          const ingData = new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            quantity: new FormControl(ingredient.quantity, Validators.required),
          });
          recipeIngredients.push(ingData);
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imageURL: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      cookTime: new FormControl(recipeCookTime, Validators.required),
      recipeType: new FormControl(recipeType, Validators.required),
      servings: new FormControl(recipeServings, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        quantity: new FormControl(null, Validators.required),
      })
    );
  }

  onSubmit() {
    // can use this object in update and edit recipe methods
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['cooktime'],
      this.recipeForm.value['recipeType'],
      this.recipeForm.value['servings'],
      this.recipeForm.value['imageURL'],
      this.recipeForm.value['ingredients']
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
