import { NgModule } from '@angular/core';
import {PeopleListComponent} from "./people-list/people-list.component";
import {CommonModule} from "@angular/common";
import {PeopleRoutingModule} from "./people-routing.module";

export const declarations = [PeopleListComponent];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  exports: []
})
export class PeopleModule { }
