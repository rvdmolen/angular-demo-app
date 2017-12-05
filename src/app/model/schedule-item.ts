import {Workout} from './workout';
import {Meal} from './meal';


export interface ScheduleItem {
    meals: Meal[],
    workouts: Workout[],
    section: string,
    timestamp: number,
    $key?: string
}
