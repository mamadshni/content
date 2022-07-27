import { NgModule } from '@angular/core';
import {PeopleListComponent} from "./people-list/people-list.component";
import {CommonModule} from "@angular/common";
import {PeopleRoutingModule} from "./people-routing.module";
import {PeopleItemContainerComponent} from "./people-item-container/people-item-container.component";
import {PeopleItemComponent} from "./people-item/people-item.component";
import {ImageLoaderDirective} from "../imageLoader.directive";

export const declarations = [PeopleListComponent,PeopleItemContainerComponent,PeopleItemComponent,ImageLoaderDirective];

@NgModule({
  declarations: [
    ...declarations,
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  exports: []
})
export class PeopleModule { }
