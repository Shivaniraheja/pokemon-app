import { Component, OnInit } from '@angular/core';
import { AllPokemonService } from '../all-pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  showStats:boolean = false;
  pokemonFav:boolean = false;
	pokemons:any;
  pokemon:any;
  stats:any;
  favourites : any=[];

  constructor(public allPokemonService: AllPokemonService) { }

  ngOnInit() {
    
  	this.allPokemonService.getPokemons().subscribe( pokemons => 
        {
          this.pokemons = pokemons.results
          console.log(this.pokemons);
        });
  }

  toggleFav(pokemon){
    this.pokemon = pokemon
    pokemon.fav =!pokemon.fav
    if(pokemon.fav){
      //add to the favourite list in local storage
      this.favourites.push(this.pokemon);
      localStorage.setItem('Favourites',JSON.stringify(this.favourites));
      console.log(localStorage.getItem('Favourites'));
    }
    else{
      //remove from the favourite list in local storage
    }
  }

  getStats(pokemon){
    //set the url in the service to get pokemon details
    this.showStats = true;
    this.allPokemonService.setUrl(pokemon.url);

    }
}