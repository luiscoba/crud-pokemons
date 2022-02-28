import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractView } from 'src/app/core/abstract_view';
import { Pokemon } from 'src/app/model/pokemon.model';

import { TablePresenter } from './presenter/table.presenter';
import { TableView } from './table.view';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent extends AbstractView implements OnInit, TableView {
  @Input() listPokemons: Pokemon[] = [];

  constructor(router: Router, private tablePresenter: TablePresenter) {
    super(router);
    tablePresenter.view = this;
  }

  ngOnInit(): void {
    this.tablePresenter.getAllPokemons();
  }

  updatePokemon(pokemon: Pokemon): void {
    this.tablePresenter.getById(pokemon.id);
  }

  deletePokemon(pokemon: Pokemon): void {}
}
