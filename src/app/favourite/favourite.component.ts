import { Component, OnInit } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  pokemons:any;

  constructor() { }

  ngOnInit() {
  	this.pokemons=JSON.parse(localStorage.getItem('Favourites'));
  	console.log(this.pokemons);
  }

}
