import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CategoryService} from "../category.service";


@Component({
  templateUrl: './menu.component.html',
  selector: 'categories-menu'
})
export class MenuComponent {
  constructor(private categoryService: CategoryService){}

  filterValue='';


  categories;

  ngOnInit() {
    this.getCategoriesList();
  }

  getCategoriesList(){
    this.categoryService.getCategories().subscribe(response => this.categories = response.json());
  }
}

