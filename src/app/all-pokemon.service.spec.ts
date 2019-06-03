import { TestBed } from '@angular/core/testing';

import { AllPokemonService } from './all-pokemon.service';

describe('AllPokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllPokemonService = TestBed.get(AllPokemonService);
    expect(service).toBeTruthy();
  });
});
