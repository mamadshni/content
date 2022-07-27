import { Component, OnInit } from '@angular/core';
import {Entry} from "contentful";
import {ContentfulService} from "../../services/contentful.service";
import {Observable} from "rxjs";
import {People} from "../../model/people.model";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  peoples : Observable<Entry<People>[]>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.peoples = this.contentful.getPeoples()
  }

}
