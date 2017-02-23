/* tslint:disable:no-unused-variable */
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FruitComponent } from './fruit.component';
import { FruitServiceService } from '../fruit-service.service';
import {Router, RouterModule} from '@angular/router';

describe('FruitComponent', () => {
  let component: FruitComponent;
  let fixture: ComponentFixture<FruitComponent>;
  const fruitMockService = {
    getTastes: function () { return []; },
    getTypes: function () { return []; },
    getShapes: function () { return []; }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FruitComponent],
      imports: [FormsModule],
      providers: [{ provide: FruitServiceService, useValue: fruitMockService }, {provide: Router, useClass:RouterModule}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form tag', async(() => {
    fixture = TestBed.createComponent(FruitComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeDefined();
  }));
});
