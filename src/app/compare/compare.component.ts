import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AllPokemonService } from '../all-pokemon.service';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
})
export class CompareComponent implements OnInit {
  pokemons:any;

  constructor(public allPokemonService: AllPokemonService) { }

  ngOnInit() {
  	this.pokemons = this.allPokemonService.getPokemonList();
  	console.log(this.pokemons);
  }

}
