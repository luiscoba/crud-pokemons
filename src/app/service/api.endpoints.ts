import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiEndpoints {
  /** Url Base */
  public url_base: string = environment.host + '/pokemons';

  /** CONSULTAR (GET) */
  public getByIdAuthor: string = this.url_base + '/?idAuthor=';

  /** CREAR (POST CON JSON) */
  public createByIdAuthor: string = this.url_base + '/?idAuthor=';

  /** CONSULTAR POR N DE REGISTROS (GET) */
  public getCountByIdAuthor: string = this.url_base + '/count?idAuthor=';

  /** CONSULTAR POR ID (GET) */
  public getById: string = this.url_base;

  /** ACTUALIZAR (PUT CON JSON) */
  public updateById: string = this.url_base + '/:id';

  /** BORRAR (DELETE) */
  public deleteById: string = this.url_base + '/:id';
}
