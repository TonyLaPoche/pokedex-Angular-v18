import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {PokemonService} from "./pokemon.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {BehaviorSubject, debounceTime, switchMap} from "rxjs";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'pkm-pokemons',
    standalone: true,
    imports: [
        JsonPipe,
        AsyncPipe,
        RouterLink
    ],
    template: `
        <button (click)="search()">Pokémons</button>
        @if (pokemons$ | async; as pokemonList) {
            <ul class="result">
                @for (pokemon of pokemonList.results; track pokemon.name) {
                    <li class="pokemon-item">
                        <a class="pokemon-item-link" href="pokemon/{{pokemon.name}}">
                            {{ pokemon.name }}
                        </a>
                    </li>
                }
            </ul>
            <div class="config">
                @if (pokemonList.next) {
                    <button class="next" (click)="searchPosition(pokemonList.next)">Next</button>
                }
                @if (pokemonList.previous) {
                    <button class="previous" (click)="searchPosition(pokemonList.previous)">Previous</button>
                }
            </div>
            <div class="count">
                Pokemons found : {{ pokemonList.count }}
                position pagination : {{ positionPagination() }}
            </div>
            <div class="pagination">
                {{ pokemonList.count / 20 }}
            </div>
        } @else {
            <div class="not-found">
                Not found
            </div>
        }
    `,
    styles: `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      button {
        background-color: #ffcb05;
        border: none;
        border-radius: 4px;
        color: #2a75bb;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin: 10px 0;
      }

      button:hover {
        background-color: #ffdb2d;
      }

      .result {
        list-style-type: none;
        padding: 0;
        margin: 20px 0;
        max-width: 600px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: .5rem;
      }

      .pokemon-item {
        width: 120px;
        height: 2rem;

        &-link {
          width: 100%;
          height: 100%;
          background-color: #f6f6f6;
          border: 1px solid #ddd;
          border-radius: 4px;
          transition: background-color 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &-link:hover {
          background-color: #eaeaea;
        }
      }


      .config {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
      }

      .config button {
        background-color: #2a75bb;
        color: #fff;
        padding: 10px 20px;
      }

      .config button.previous {
        margin-right: 10px;
      }

      .not-found {
        color: #ff0000;
        font-size: 18px;
        text-align: center;
      }`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonsComponent {
    count = signal(0)
    positionPagination = signal(0)
    #pokemonService = inject(PokemonService);
    #searchSubject = new BehaviorSubject<string | null>(null);
    pokemons$ = this.#searchSubject.pipe(
        debounceTime(500),
        switchMap(url => {
                if (url) {
                    this.positionPagination.set(this.getOffsetFromUrl(url) / this.count())
                    return this.#pokemonService.getPokemonsByOffsetPosition(url)
                } else {
                    return this.#pokemonService.getPokemons()
                }
            }
        ))

    search() {
        this.#searchSubject.next(null);
    }

    searchPosition(url: string) {
        this.#searchSubject.next(url);
    }

    getOffsetFromUrl(url: string): number {

        const params = new URLSearchParams(url.split('?')[1]);
        const offset = params.get('offset');
        return offset ? parseInt(offset, 10) : 0;
    }

}
