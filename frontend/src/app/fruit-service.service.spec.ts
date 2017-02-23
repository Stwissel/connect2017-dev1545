/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FruitServiceService } from './fruit-service.service';
import { Http, HttpModule } from '@angular/http';


describe('FruitServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FruitServiceService, { provide: Http, useClass: HttpModule }]
    });
  });

  it('should be a service', inject([FruitServiceService], (service: FruitServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should have taste', inject([FruitServiceService], (service: FruitServiceService) => {
    expect(Array.isArray(service.getTastes())).toEqual(true);
  }));

  it('should have shape', inject([FruitServiceService], (service: FruitServiceService) => {
    expect(Array.isArray(service.getShapes())).toEqual(true);
  }));

  it('should have taste', inject([FruitServiceService], (service: FruitServiceService) => {
    expect(Array.isArray(service.getTypes())).toEqual(true);
  }));
});

