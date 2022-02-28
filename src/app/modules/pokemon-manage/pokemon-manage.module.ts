import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SnackbarComponent } from '../shared/snackbar/snackbar.component';
import { CrudPokemonComponent } from './components/crud-pokemon/crud-pokemon.component';
import { CrudPokemonPresenter } from './components/crud-pokemon/presenter/crud-pokemon.presenter';
import { EditComponent } from './components/edit/edit.component';
import { EditPresenter } from './components/edit/presenter/edit.presenter';
import { TablePresenter } from './components/table/presenter/table.presenter';
import { TableComponent } from './components/table/table.component';
import { PokemonManageRoutingModule } from './pokemon-manage-routing.module';

@NgModule({
  declarations: [
    TableComponent,
    CrudPokemonComponent,
    EditComponent,
    SnackbarComponent,
  ],
  imports: [CommonModule, PokemonManageRoutingModule, ReactiveFormsModule],
  providers: [TablePresenter, CrudPokemonPresenter, EditPresenter],
})
export class PokemonManageModule {}
