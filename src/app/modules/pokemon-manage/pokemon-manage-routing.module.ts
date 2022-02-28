import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrudPokemonComponent } from './components/crud-pokemon/crud-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: CrudPokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonManageRoutingModule {}
