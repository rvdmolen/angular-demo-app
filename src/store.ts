import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';
import {User} from './app/model/user';
import {Meal} from './app/model/meal';
import {Workout} from './app/model/workout';
import {ScheduleItem} from './app/model/schedule-item';

export interface State {
    user: User,
    meals: Meal[],
    schedule: ScheduleItem[],
    selected: any,
    list: any,
    date: Date;
    workouts: Workout[],
    [key: string]: any
}

const state: State = {
    user: undefined,
    meals: undefined,
    schedule: undefined,
    selected: undefined,
    list: undefined,
    workouts: undefined,
    date: undefined
};

export class Store {

    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable().distinctUntilChanged();

    get value() {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store.pluck(name);
    }

    set(name: string, state: any) {
        this.subject.next({...this.value, [name]: state});
    }

}
