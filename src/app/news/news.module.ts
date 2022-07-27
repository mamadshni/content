import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {NewsRoutingModule} from "./news-routing.module";
import {NewsListComponent} from "./news-list/news-list.component";
import {NewsItemComponent} from "./news-item/news-item.component";
import {NewsItemContainerComponent} from "./news-item-container/news-item-container.component";

export const declarations = [NewsListComponent, NewsItemComponent, NewsItemContainerComponent];

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
