import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Pokemon } from '../model/pokemon.model';

/**
 * Servicio para la api de pokemons
 */
@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  /** Url Base */
  public url_base: string = environment.host + '/pokemons';

  constructor(private http: HttpClient) {}

  public getAllPokemons() {
    return this.http.get(this.url_base + '/');
  }

  public getPokemonByName(name: string) {
    return this.http.get(this.url_base + '/?name=' + name);
  }

  public createByIdAuthor(pokemon: Pokemon) {
    return this.http.post(this.url_base + '/?idAuthor=7', pokemon);
  }
}
