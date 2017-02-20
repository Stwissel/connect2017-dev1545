/* tslint:disable:no-unused-variable */
import { ViewContainerRef } from '@angular/core'
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { RouterModule, RouterOutletMap, Router, RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MainMenuComponent, HomeComponent, RouterOutlet
      ],
      providers: [AuthService, { provide: Router, useClass: RouterModule }, RouterOutletMap, ViewContainerRef]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Fruit Bazzar'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Fruit Bazzar');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Fruit Bazzar');
  }));
});
