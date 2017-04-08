import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {
  public transform(value:any, name:string) {
    if (value) {
      return value.filter((item) => {
        if (item.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
          return item;
        }
      });
    }
    return value;
  }
}
