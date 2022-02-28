import { Injectable } from '@angular/core';
import { Presenter } from 'src/app/core/presenter';
import { PokemonsService } from 'src/app/service/pokemons.service';

import { TableView } from '../table.view';

@Injectable()
export class TablePresenter implements Presenter {
  view!: TableView;

  constructor(private pokemonsService: PokemonsService) {}

  getAllPokemons(): void {
    this.pokemonsService.getAllPokemons().subscribe((data: any) => {
      this.view.listPokemons = data;
    });
  }

  getById(id: number): void {
    /* this.pokemonsService.getById(id).subscribe((data: Pokemon) => {
      this.view.pokemon = data;

      console.log(this.view.pokemon);
    }); */
  }
}
