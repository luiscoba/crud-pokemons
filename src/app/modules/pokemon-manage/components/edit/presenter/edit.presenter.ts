import { Injectable } from '@angular/core';
import { Presenter } from 'src/app/core/presenter';
import { PokemonsService } from 'src/app/service/pokemons.service';

import { EditView } from './../edit.view';

@Injectable()
export class EditPresenter implements Presenter {
  view!: EditView;

  constructor(private pokemonsService: PokemonsService) {}

  createByIdAuthor() {
    this.pokemonsService
      .createByIdAuthor(this.view.pokemon)
      .subscribe((data: any) => {});
  }
}
