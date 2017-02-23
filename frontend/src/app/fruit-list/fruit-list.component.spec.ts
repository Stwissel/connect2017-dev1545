/* tslint:disable:no-unused-variable */
import { Http, HttpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FruitServiceService } from '../fruit-service.service';
import { FruitListComponent } from './fruit-list.component';
import { Observable } from 'rxjs/Observable';

describe('FruitListComponent', () => {
  let component: FruitListComponent;
  let fixture: ComponentFixture<FruitListComponent>;
  const mockObservable = { subscribe: function () {/* no action*/}};
  const fruitMockService = {
    getFruits: function () { return mockObservable;}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FruitListComponent],
      imports: [],
      providers: [{ provide: FruitServiceService, useValue: fruitMockService }, { provide: Http, useClass: HttpModule }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
