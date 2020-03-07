import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  baseUrl: string = 'https://api.rawg.io/api/';
  pagesize: string = 'https://api.rawg.io/games/&page_size=20&page=';

  constructor(

    private http: HttpClient

  ) { }

  getdetalles(gameId) {
    let endpoint = `${this.baseUrl}games/${gameId}`;

    return this.http.get(endpoint);
   
  }
  getultimosjuegos() {
      let endpoint = `${this.baseUrl}games`;

return this.http.get(endpoint);
  }
  getTrailers(id) {
    let endpoint = `${this.baseUrl}games/${id}/movies`;
    return this.http.get(endpoint);
  }
  getfotos(id) {
    let endpoint = `${this.baseUrl}games/${id}/screenshots`;
    return this.http.get(endpoint);
  }
  getnew(size){
    let endpoint = `${this.pagesize}${size}`;
    return this.http.get(endpoint);
  }
}
