import { Fruit } from './fruit';
import { Component, OnInit } from '@angular/core';
import { FruitServiceService } from '../fruit-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  tastes: Array<string>;
  shapes: Array<string>;
  ftypes: Array<string>;
  model: Fruit = new Fruit();
  submitted = false;

  onSubmit() {

    this.fruitService.submitFruit(this.model)
      .subscribe(
      fruit => {
      this.submitted = true;
        this.router.navigate(['/list']);
      },
      error => alert('submission failed'));
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private fruitService: FruitServiceService, private router: Router) {

  }

  ngOnInit() {
    this.tastes = this.fruitService.getTastes();
    this.ftypes = this.fruitService.getTypes();
    this.shapes = this.fruitService.getShapes();
  }

}
