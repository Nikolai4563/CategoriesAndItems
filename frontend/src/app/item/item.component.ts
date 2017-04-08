import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../item.service";

@Component({
  templateUrl: './item.component.html'
})
export class ItemComponent {
  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ){}

  item;
  private sub: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.requestItem(params['alias']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  //
  requestItem(alias){
    this.itemService.getItem(alias).subscribe(
      response => this.item = response.json(),
      error => console.log("Error: ", error),
      () => console.log(this.item));
  }
}

