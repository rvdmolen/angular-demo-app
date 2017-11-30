import {Component, OnDestroy, OnInit} from '@angular/core';
import {MealService} from '../../../shared/services/meals/meal.service';
import {Observable} from 'rxjs/Observable';
import {Meal} from '../../../../app/model/meal';
import {Subscription} from 'rxjs/Subscription';
import {Store} from 'store';

@Component({
    selector: 'meals',
    templateUrl: 'meals.component.html',
    styleUrls: ['meals.component.scss']
})

export class MealsComponent implements OnInit, OnDestroy {

    meals$: Observable<Meal[]>;
    subscription: Subscription;

    constructor(
        private mealsService: MealService,
        private store: Store
    ) {
    }

    ngOnInit() {
        this.meals$ = this.store.select<Meal[]>('meals');
        this.subscription = this.mealsService.meals$.subscribe();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onRemove(meal: Meal) {
        this.mealsService.removeMeal(meal.$key);
    }
}
