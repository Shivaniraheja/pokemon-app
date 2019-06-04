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
  pokemon:any;
  nextPokemon:any;
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
  		this.allPokemonService.getStats(this.compareList[0].url).subscribe( details => 
        {
          this.pokemon = details;
          this.addToCompareData(this.pokemon.weight,1,'w');
          this.addToCompareData(this.pokemon.height,1,'h');

        });

  		this.allPokemonService.getStats(this.compareList[1].url).subscribe( details => 
        {
          this.nextPokemon = details;
          this.addToCompareData(this.nextPokemon.weight,2,'w');
          this.addToCompareData(this.nextPokemon.height,2,'h');

        });
		}
  }

  addToCompareData(data,i,type){
  	if(type=='w'){
  		this.compareWeight.push(data);
  		if(i==2){
  			//draw weight chart
  			this.drawWeightChart(this.compareWeight);
          
  		}
  	}
  	if(type=='h'){
  		this.compareHeight.push(data);
  		if(i==2){
  			//draw height chart
  			this.drawHeightChart(this.compareHeight);

  		}
  	}

  }
  drawHeightChart(data){
  	this.barHeightChart = new Chart('hCanvas', {
          type: 'bar',
          data: {
            labels: ["1","2"],
            datasets: [
              { 
                data: data
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
  drawWeightChart(data){
  	this.barWeightChart = new Chart('wCanvas', {
          type: 'bar',
          data: {
            labels: ["1","2"],
            datasets: [
              { 
                data: data
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



