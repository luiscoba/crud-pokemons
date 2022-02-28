import { View } from 'src/app/core/view';
import { Pokemon } from 'src/app/model/pokemon.model';

export interface CrudPokemonView extends View {
  listPokemons: Pokemon[];
  pokemonBySearch: Pokemon;
  nameSearchPokemon: string;
}
