import { Component, OnInit } from '@angular/core';
import { FruitServiceService } from '../fruit-service.service';
import { Fruit } from '../fruit/fruit';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {
  fruits: Array<Fruit> = [];
  constructor(private fruitService: FruitServiceService) { }


  getFruits() {
    this.fruitService.getFruits()
      .subscribe(
      fruits => this.fruits = fruits,
      error => alert('submission failed'));
  }

  ngOnInit() {
    this.getFruits();
  }

}
