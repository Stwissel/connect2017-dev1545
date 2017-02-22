import { Injectable } from '@angular/core';

@Injectable()
export class FruitServiceService {

  constructor() { }

  getTastes() {
    return ['sweet', 'sour', 'boring', 'aweful', 'divine'];
  }

  getShapes() {
    return ['round', 'spiky', 'oval', 'cylinder', 'odd'];
  }
  getTypes() {
    return ['tropical', 'berry', 'moderate climate'];
  }

}
