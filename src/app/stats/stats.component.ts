import { Component, OnInit } from '@angular/core';
import { AllPokemonService } from '../all-pokemon.service';
import { Pokemon } from '../pokemon';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
	pokemonUrl :string;
  details:any;
	abilities:any;
  types:any;
  stats:any;
  statName:any;
  statValue:any;
  chart:any = [];
  barChart:any = [];


  constructor(public allPokemonService: AllPokemonService) { }

  ngOnInit() {

  	this.pokemonUrl=this.allPokemonService.getUrl();

  	this.allPokemonService.getStats(this.pokemonUrl).subscribe( details => 
        {
          this.details = details
          this.abilities = details.abilities
          this.types = details.types
          this.stats = details.stats
          this.statName = this.stats.map(u=>u.stat.name);
          this.statValue = this.stats.map(u=>u.base_stat);
          //console.log(this.details, this.abilities[0].ability, this.stats.map(u=>u.stat.name), this.stats.map(u=>u.base_stat));
          this.drawBarchart(this.details.weight,this.details.height);
          this.drawRadar(this.statName,this.statValue);
          

        });
  
  
  }
  
drawRadar(statName,statValue ){
  this.chart = new Chart('canvas', {
          type: 'radar',
          data: {
            labels: statName,
            datasets: [
              { 
                data: statValue
              }
            ]
          },
          options: {
            legend: {
              display: false
            }
          }
        });
}

drawBarchart(weight,height){
  this.barChart = new Chart('bar', {
          type: 'bar',
          data: {
            labels: ["Weight","Height"],
            datasets: [
              { 
                data: [weight,height]
              }
            ]
          },
          options: {
            legend: {
              display: false
            }
          }
        });
}
}
