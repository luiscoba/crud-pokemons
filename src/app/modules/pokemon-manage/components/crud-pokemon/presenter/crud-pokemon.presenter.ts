import { Injectable } from '@angular/core';
import { Presenter } from 'src/app/core/presenter';
import { PokemonsService } from 'src/app/service/pokemons.service';

import { CrudPokemonView } from '../crud-pokemon.view';

@Injectable()
export class CrudPokemonPresenter implements Presenter {
  view!: CrudPokemonView;

  constructor(private pokemonsService: PokemonsService) {}

  getPokemonByName() {
    this.pokemonsService
      .getPokemonByName(this.view.nameSearchPokemon)
      .subscribe((data: any) => {
        if (data.length === 0) {
          this.getAllPokemons();
        } else {
          this.view.pokemonBySearch = data;
        }
      });
  }

  getAllPokemons(): void {
    this.pokemonsService.getAllPokemons().subscribe((data: any) => {
      this.view.pokemonBySearch = data;
    });
  }
}
