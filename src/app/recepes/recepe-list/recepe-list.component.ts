import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recepe.model';

@Component({
  selector: 'app-recepe-list',
  templateUrl: './recepe-list.component.html',
  styleUrls: ['./recepe-list.component.css']
})
export class RecepeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Test', 'This is only a test','https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg'),
    new Recipe('Test', 'This is only a test','https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
