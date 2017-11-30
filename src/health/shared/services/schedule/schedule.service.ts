import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Store} from 'store';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ScheduleService {

    private date$: BehaviorSubject<Date> = new BehaviorSubject(new Date());

    public schedule$: Observable<any[]> = this.date$
        .do((next: any) => this.store.set('date', next));

    constructor(
        private store: Store
    ) {
    }

    updateDate(date: Date) {
        this.date$.next(date);
    }
}
