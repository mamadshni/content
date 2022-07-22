import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {NewsRoutingModule} from "./news-routing.module";
import {NewsListComponent} from "./news-list/news-list.component";

export const declarations = [NewsListComponent];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  exports: []
})
export class NewsModule { }
