import {Workout} from './workout';
import {Meal} from './meal';

export interface ScheduleItem {
    meals: Meal[],
    workout: Workout[],
    section: string,
    timestamp: number,
    $key?: number
}
