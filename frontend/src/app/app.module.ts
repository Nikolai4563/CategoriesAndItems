import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {SearchPipe} from './search.pipe';

import { AppComponent } from './app.component';
import { NotFoundedComponent } from './not-fouded/not_founded.component';
import { MenuComponent } from './menu/menu.component';
import { ItemsComponent } from './home/items.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import { CategoryService } from './category.service';
import { ItemService } from './item.service';
import {Ng2PaginationModule} from 'ng2-pagination';

const appRoutes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories/:alias', component: CategoryComponent},
  {path: 'items/:alias', component: ItemComponent},
  {path: '**', component: NotFoundedComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundedComponent,
    MenuComponent,
    HomeComponent,
    ItemComponent,
    ItemsComponent,
    CategoryComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Ng2PaginationModule
  ],
  providers: [{provide: 'api', useValue: 'http://localhost:3000/api'}, CategoryService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
