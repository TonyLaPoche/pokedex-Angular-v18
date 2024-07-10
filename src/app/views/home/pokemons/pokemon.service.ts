import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemons} from "./pokemons.model";
import {PokemonByNameOrId} from "./pokemon.model";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  #baseUrl = 'https://pokeapi.co/api/v2/'; // https://pokeapi.co/api/v2/ability/{id or name}/
  #http = inject(HttpClient)

  getPokemons() {
    return this.#http.get<Pokemons>(`${this.#baseUrl}/pokemon`)
  }

  getPokemonsByOffsetPosition(url:string) {
    return this.#http.get<Pokemons>(url)
  }

  getPokemonByNameOrId(nameOrId: string | number) {
    return this.#http.get<PokemonByNameOrId>(`${this.#baseUrl}/pokemon/${nameOrId}`);
  }

}
