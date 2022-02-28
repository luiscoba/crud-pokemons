import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractView } from 'src/app/core/abstract_view';
import { Pokemon } from 'src/app/model/pokemon.model';

import { CrudPokemonView } from './crud-pokemon.view';
import { CrudPokemonPresenter } from './presenter/crud-pokemon.presenter';

@Component({
  selector: 'app-crud-pokemon',
  templateUrl: './crud-pokemon.component.html',
  styleUrls: ['./crud-pokemon.component.css'],
})
export class CrudPokemonComponent
  extends AbstractView
  implements OnInit, CrudPokemonView
{
  nameSearchPokemon = '';
  isNew = false;

  pokemonBySearch: any = [{}];
  listPokemons: Pokemon[] = [];

  constructor(
    router: Router,
    private crudPokemonPresenter: CrudPokemonPresenter
  ) {
    super(router);
    crudPokemonPresenter.view = this;
  }

  ngOnInit(): void {}

  onSearch(search: any): void {
    this.nameSearchPokemon = search.target.value;

    this.crudPokemonPresenter.getPokemonByName();
  }

  onIsVisible() {
    this.isNew = false;
  }
}
