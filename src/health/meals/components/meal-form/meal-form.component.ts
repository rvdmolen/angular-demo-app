import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output,
    SimpleChanges
} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Meal} from '../../../../app/model/meal';

@Component({
    selector: 'meal-form',
    templateUrl: 'meal-form.component.html',
    styleUrls: ['meal-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MealFormComponent implements OnInit, OnChanges {

    @Input() meal: Meal;
    form: FormGroup;

    @Output() create = new EventEmitter<Meal>();
    @Output() update = new EventEmitter<Meal>();
    @Output() remove = new EventEmitter<Meal>();

    toggled = false;
    exists = false;

    constructor(
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            ingredients: this.fb.array([''])
        });
    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.meal.currentValue.name) {
            this.exists = true;
        }

        if ((this.meal) && (this.meal.name)) {
            this.exists = true;
            this.emptyIngredients();

            const value = this.meal;
            this.form.patchValue(value);

            value.ingredients.forEach(ingredient => {
               this.ingredients.push(new FormControl(ingredient));
            });


        }
    }

    get ingredients() {
        return this.form.get('ingredients') as FormArray;
    }

    get required() {
        return this.form.get('name').hasError('required') &&
            this.form.get('name').touched;
    }

    addIngredient() {
        this.ingredients.push(new FormControl(''));
    }

    removeIngredient(index: number) {
        this.ingredients.removeAt(index);
    }

    createMeal() {
        if (this.form.valid) {
            this.create.emit(this.form.value);
        }
    }

    removeMeal() {
        this.remove.emit(this.form.value);
    }

    updateMeal() {
        if (this.form.valid) {
            this.update.emit(this.form.value);
        }
    }

    toggle() {
        this.toggled = !this.toggled;
    }

    emptyIngredients() {
        while (this.ingredients.controls.length > 0) {
            this.ingredients.removeAt(0);
        }
    }
}
