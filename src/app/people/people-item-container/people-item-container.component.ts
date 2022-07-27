import {Component, OnInit} from '@angular/core';
import {Entry} from "contentful";
import {Observable, pluck} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {People} from "../../model/people.model";

@Component({
  selector: 'app-people-item-container',
  templateUrl: './people-item-container.component.html',
  styleUrls: ['./people-item-container.component.scss']
})
export class PeopleItemContainerComponent{

  public peopleDetail$: Observable<Entry<People>> = this.route.data.pipe(pluck('peopleDetail'));

  constructor(private route: ActivatedRoute) {}

}
