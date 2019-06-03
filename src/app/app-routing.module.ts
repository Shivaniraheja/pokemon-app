import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CompareComponent } from './compare/compare.component';

const routes: Routes = [
{
    path: '',redirectTo: '/pokemon-page', pathMatch: 'full'
  },
{ path: 'pokemon-page', component: PokemonListComponent },
{ path: 'compare-page', component: CompareComponent },
{ path: 'favourite-page', component: FavouriteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
