import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleListComponent} from "./people-list/people-list.component";
import {RouteParam} from "../model/routes.model";
import {PeopleItemContainerComponent} from "./people-item-container/people-item-container.component";
import {PeopleDetailResolver} from "./people-detail.resolver";

const routes: Routes = [
  {path: '', component: PeopleListComponent},
  {
    path: `:${RouteParam.SelectedPeople}`,
    component: PeopleItemContainerComponent,
    resolve: {
      peopleDetail: PeopleDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
