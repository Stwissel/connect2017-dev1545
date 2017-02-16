/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FruitServiceService } from './fruit-service.service';

describe('FruitServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FruitServiceService]
    });
  });

  it('should ...', inject([FruitServiceService], (service: FruitServiceService) => {
    expect(service).toBeTruthy();
  }));
});
