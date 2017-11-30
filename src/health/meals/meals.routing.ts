import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MealsComponent} from './containers/meals/meals.component';
import {MealComponent} from './containers/meal/meal.component';

export const mealsRoutes: Routes = [
    {
        path: '',
        component: MealsComponent
    },
    {
        path: 'new',
        component: MealComponent
    },
    {
        path: ':id',
        component: MealComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(mealsRoutes)
    ]
})
export class MealsRoutingModule {
}
