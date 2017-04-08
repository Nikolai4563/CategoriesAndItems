import { Injectable, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ItemService {

  constructor(
    private http: Http,
    @Inject('api') private api
  ) {}

  getItems(){
    return this.http.get(this.api + '/items');
  }

  getItem(alias){
    return this.http.get(this.api + '/items/' + alias);
  }

}
