import { Component, OnInit } from '@angular/core';
import { AllPokemonService } from '../all-pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
	pokemonUrl :string;
  stats:any;
	
  constructor(public allPokemonService: AllPokemonService) { }

  ngOnInit() {

  	this.pokemonUrl=this.allPokemonService.getUrl();

  	this.allPokemonService.getStats(this.pokemonUrl).subscribe( stats => 
        {
          this.stats = stats
          console.log(this.stats);
        });
  
  }

}
