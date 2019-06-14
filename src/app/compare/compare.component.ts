import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AllPokemonService } from '../all-pokemon.service';
import { CdkDragDrop,DragDropModule,CdkDragEnd} from '@angular/cdk/drag-drop';
import { Pokemon } from '../pokemon';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
})
export class CompareComponent implements OnInit {
  pokemons:any;
  compareList:any =[];
  showCompare:boolean = false;
  pokemonData1:any;
  pokemonData2:any;
  details:any;
  compareHeight:any=[];
  compareWeight:any=[];
  barHeightChart:any =[];
  barWeightChart:any =[];


  constructor(public allPokemonService: AllPokemonService) { }

  ngOnInit() {
  	this.pokemons = this.allPokemonService.getPokemonList();
  	console.log(this.pokemons);
  }
  dragEnd(event: CdkDragEnd, pokemon) {
  	this.compareList.push(pokemon)
  console.log(this.compareList);
  }

  compareStats(){
  	if(this.compareList.length>0){
  		this.showCompare= true;
  		// get stats for both pokemons
  		this.allPokemonService.compareData(this.compareList[0].url,this.compareList[1].url).subscribe( details => 
        {
            this.pokemonData1 = details[0];
            this.pokemonData2 = details[1];
          this.drawHeightChart(this.pokemonData1.weight,this.pokemonData2.weight,this.pokemonData1.name,this.pokemonData2.name);
          this.drawWeightChart(this.pokemonData1.height,this.pokemonData2.height,this.pokemonData1.name,this.pokemonData2.name);

        });
		}
  }

  
  drawHeightChart(data1,data2,name1,name2){
  	this.barHeightChart = new Chart('hCanvas', {
          type: 'bar',
          data: {
            labels: [name1,name2],
            datasets: [
              { 
                data: [data1,data2]
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
  drawWeightChart(data1,data2,name1,name2){
  	this.barWeightChart = new Chart('wCanvas', {
          type: 'bar',
          data: {
            labels: [name1,name2],
            datasets: [
              { 
                data: [data1,data2]
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



