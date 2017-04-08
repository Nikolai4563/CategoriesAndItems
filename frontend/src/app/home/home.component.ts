import { Component } from '@angular/core';
import {ItemService} from "../item.service";

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private itemService: ItemService){}

  items;

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList(){
    this.itemService.getItems().subscribe(response => this.items = response.json());
  }
}

