import { View } from 'src/app/core/view';
import { Pokemon } from 'src/app/model/pokemon.model';

export interface TableView extends View {
  pokemon?: Pokemon;
  listPokemons: Pokemon[];
}
