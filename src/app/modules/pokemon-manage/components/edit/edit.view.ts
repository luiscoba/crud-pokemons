import { View } from 'src/app/core/view';
import { Pokemon } from 'src/app/model/pokemon.model';

export interface EditView extends View {
    pokemon: Pokemon;

}
