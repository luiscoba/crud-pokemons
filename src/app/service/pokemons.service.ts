import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * Servicio para la api de pokemons
 */
@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  /** Url Base */
  public url_base: string = environment.host + '/pokemons';

  constructor(private http: HttpClient) {}

  public getAllPokemons() {
    return this.http.get(this.url_base + '/');
  }

  public getPokemonByName(name: string) {
    return this.http.get(this.url_base + '/?name=' + name);
  }

  /* 
  public getByIdAuthor(idAuthor: number) {
    return this.http.get(this.endpoints.getByIdAuthor + idAuthor);
  }

  public createByIdAuthor(pokemon: number) {
    return this.http.post(this.endpoints.createByIdAuthor, pokemon);
  }

  public getCountByIdAuthor(idAuthor: number) {
    return this.http.get(this.endpoints.getCountByIdAuthor + idAuthor);
  }

  public getById(id: number) {
    return this.http.get(`${this.endpoints.getById}/${id}`);
  }

  public updateById(id: number) {
    return this.http.get(this.endpoints.updateById + id);
  }

  public deleteById(id: number) {
    return this.http.get(this.endpoints.deleteById + id);
  } */
}
