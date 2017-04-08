import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'mw-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent {
  @Input() items: any;

}

