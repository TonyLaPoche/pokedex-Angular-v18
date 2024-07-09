import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {DebugComponent} from "../../shared/components/debug/debug.component";

@Component({
    selector: 'pkm-home',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        JsonPipe,
        DebugComponent
    ],
    template: `
        <form>
            <input type="text" id="pokemon-name">
            <button>Recherche</button>
        </form>

        <section class="form-training">
            <form type="submit" [formGroup]="pkmForm" (ngSubmit)="onSubmit()">
                <fieldset>
                    <legend>Make a choice</legend>
                    <ul>
                        <li>
                            <input type="radio" id="pkm-radio" formControlName="choice" value="pokemon">
                            <label for="pkm-radio">Pokémons</label>
                        </li>
                        <li>
                            <input type="radio" id="elt-radio" formControlName="choice" value="elements">
                            <label for="elt-radio">Elements</label>
                        </li>
                        <li>
                            <input type="radio" id="gen-radio" formControlName="choice" value="generations">
                            <label for="gen-radio">Générations</label>
                        </li>
                    </ul>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </section>

        <pkm-debug [value]="pkmForm.controls['choice'].value"></pkm-debug>
    `,
    styles: ``
})
export class HomeComponent {
    pkmForm: FormGroup = new FormGroup({
        choice: new FormControl('', {nonNullable: true, validators: [Validators.required]})
    })

    onSubmit() {
        if (!this.pkmForm.valid) {
            throw new Error('Form invalid')
        }
        console.log(this.pkmForm.value)
    }
}
