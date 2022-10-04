import { NgModule } from '@angular/core';
import { ShoppingListService } from './shared/services/shopping-list.service';
import { RecipeService } from './shared/services/recipe.service';
import { DataStorageService } from './shared/services/data-storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule {}
