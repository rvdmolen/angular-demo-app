import {NgModule} from '@angular/core';
import {MealsComponent} from './containers/meals/meals.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MealsRoutingModule} from './meals.routing';
import {SharedHealthModule} from '../shared/shared.module';
import {MealComponent} from './containers/meal/meal.component';
import {MealFormComponent} from './components/meal-form/meal-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MealsRoutingModule,
        RouterModule,
        SharedHealthModule
    ],
    exports: [

    ],
    declarations: [
        MealsComponent,
        MealComponent,
        MealFormComponent
    ],
    providers: [

    ],
})
export class MealsModule {
}
