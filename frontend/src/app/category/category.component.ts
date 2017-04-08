import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../category.service";

@Component({
  templateUrl: './category.component.html'
})
export class CategoryComponent {
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ){}

  private sub: any;
  category;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.requestCategory(params['alias']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  //
  requestCategory(alias){
    this.categoryService.getCategory(alias).subscribe(
      response => this.category = response.json(),
      error => console.log("Error: ", error),
      () => console.log(this.category));
  }
}

