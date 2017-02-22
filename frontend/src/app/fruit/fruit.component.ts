import { Fruit } from './fruit';
import { Component, OnInit } from '@angular/core';
import {FruitServiceService} from '../fruit-service.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  tastes: Array<string>;
  shapes: Array<string>;
  ftypes: Array<string>;

  model = new Fruit('Orange', 'sweet', 'orange', 'round', 'tropical');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private fruitService: FruitServiceService) {

   }

  ngOnInit() {
    this.tastes = this.fruitService.getTastes();
    this.ftypes = this.fruitService.getTypes();
    this.shapes = this.fruitService.getShapes();
  }

}
