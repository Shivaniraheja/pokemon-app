import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable}     from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class AllPokemonService {
pokemon : any=[]
pokemonList: any
listUrl : string = 'https://pokeapi.co/api/v2/pokemon/'
url :string;
stats:any;
  constructor(private http: HttpClient) { }

  getPokemons(){
  return this.http.get(this.listUrl)
  .pipe(map((response: any) => response));
    
  }
  public compareData(url1,url2): Observable<any[]> {
    let response1 = this.getStats(url1);
    let response2 = this.getStats(url2);
    return forkJoin([response1, response2]);
  }
  setUrl(url){
  	this.url=url
  }
  getUrl(){
  	return this.url
  }
  getStats(url){
  	this.url=url
  	return this.http.get(this.url)
  .pipe(map((response: any) => response));

  }
  setPokemonList(pokemonList){
    this.pokemonList=pokemonList;
  }
  getPokemonList(){
    return this.pokemonList;
  }

}
