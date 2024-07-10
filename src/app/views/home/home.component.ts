import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {DebugComponent} from "../../shared/components/debug/debug.component";
import {PokemonsComponent} from "./pokemons/pokemons.component";

@Component({
    selector: 'pkm-home',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        JsonPipe,
        DebugComponent,
        PokemonsComponent
    ],
    template: `
        <section class="form-container">
            <pkm-pokemons></pkm-pokemons>
        </section>
        
        <hr class="divider" />
        
<!--        <section class="form-container">-->
<!--            <form [formGroup]="pkmByName" (ngSubmit)="onSubmit()">-->
<!--                <input type="text" id="pokemon-name" formControlName="pokemonByName">-->
<!--                <button type="submit">Recherche</button>-->
<!--            </form>-->
<!--            <div class="result-card"></div>-->
<!--        </section>-->

<!--        <section class="form-container">-->
<!--            <form type="submit" [formGroup]="pkmForm" (ngSubmit)="onSubmit()">-->
<!--                <fieldset>-->
<!--                    <legend>Make a choice</legend>-->
<!--                    <ul>-->
<!--                        <li>-->
<!--                            <input type="radio" id="pkm-radio" formControlName="choice" value="pokemon">-->
<!--                            <label for="pkm-radio">Pokémons</label>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <input type="radio" id="elt-radio" formControlName="choice" value="elements">-->
<!--                            <label for="elt-radio">Elements</label>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <input type="radio" id="gen-radio" formControlName="choice" value="generations">-->
<!--                            <label for="gen-radio">Générations</label>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </fieldset>-->
<!--                <button type="submit">Submit</button>-->
<!--            </form>-->
<!--            <div class="result-pokemons-list">-->
<!--                <pkm-debug [value]="pkmForm.controls['choice'].value"></pkm-debug>-->
<!--            </div>-->
<!--        </section>-->

    `,
    styles: `
    .form-container {
      min-width: 320px;
      width: max-content;
      padding: 8px 16px;
      margin: 0 auto;
      border: whitesmoke 1px solid;
      & form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
      
    .divider {
      border: hidden;
      border-top: 1px solid #ccc;
    }
    `
})
export class HomeComponent {

    pkmByName = new FormGroup(
        {
            pokemonByName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
        }
    )

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
