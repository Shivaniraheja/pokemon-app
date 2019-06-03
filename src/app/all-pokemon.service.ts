import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable}     from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class AllPokemonService {
pokemon : any=[]
listUrl : string = 'https://pokeapi.co/api/v2/pokemon/'
url :string;
stats:any;
  constructor(private http: HttpClient) { }

  getPokemons(){
  return this.http.get(this.listUrl)
  .pipe(map((response: any) => response));
    
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

}
