import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meal} from '../../../../app/model/meal';
import {MealService} from '../../../shared/services/meals/meal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'meal',
    templateUrl: 'meal.component.html',
    styleUrls: ['meal.component.scss']
})

export class MealComponent implements OnInit, OnDestroy {
    meal$: Observable<Meal>;
    subscription: Subscription;

    constructor(
        private mealService: MealService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.mealService.meals$.subscribe();
        this.meal$ = this.route.params
            .switchMap(param => {
                return this.mealService.getMeal(param.id);
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    async addMeal(meal: Meal) {
        await this.mealService.addMeal(meal);
        this.backToMeals();
    }

    async updateMeal(meal: Meal) {
        const key = this.route.snapshot.params.id;
        await this.mealService.updateMeal(key, meal);
        this.backToMeals();
    }

    async removeMeal(meal: Meal) {
        const key = this.route.snapshot.params.id;
        await this.mealService.removeMeal(key);
        this.backToMeals();
    }

    backToMeals() {
        this.router.navigate(['meals'])
    }
}
