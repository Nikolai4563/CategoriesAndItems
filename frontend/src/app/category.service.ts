import { Injectable, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoryService {

  constructor(
    private http: Http,
    @Inject('api') private api
  ) {}

  getCategories(){
    return this.http.get(this.api + '/categories');
  }

  getCategory(alias){
    return this.http.get(this.api + '/categories/' + alias);
  }

}
