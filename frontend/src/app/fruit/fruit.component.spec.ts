/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FruitComponent } from './fruit.component';
import { FruitServiceService } from '../fruit-service.service';

describe('FruitComponent', () => {
  let component: FruitComponent;
  let fixture: ComponentFixture<FruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FruitComponent],
      imports: [FormsModule],
      providers: [FruitServiceService]
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
    const fixture = TestBed.createComponent(FruitComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeDefined();
  }));
});
