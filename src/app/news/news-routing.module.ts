import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from "./news-list/news-list.component";
import {RouteParam} from "../model/routes.model";
import {NewsItemContainerComponent} from "./news-item-container/news-item-container.component";

const routes: Routes = [
  {path: '', component: NewsListComponent},
  {
    path: `:${RouteParam.SelectedNews}`,
    component: NewsItemContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
