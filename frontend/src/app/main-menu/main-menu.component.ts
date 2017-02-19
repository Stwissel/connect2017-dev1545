import {AuthService} from '../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  title = 'Fruit Bazzar';
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
