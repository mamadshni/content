import { Component, Input, OnInit } from '@angular/core';
import {Entry} from "contentful";
import {People} from "../../model/people.model";
import {SeoService} from "../../services/seo.service";

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.scss']
})
export class PeopleItemComponent implements OnInit{

  @Input() peopleDetail: Entry<People>;

  constructor(private seoService: SeoService) {}


  ngOnInit() {
    this.seoService.setTitle(this.peopleDetail.fields.title);
    this.seoService.setMetas([
      {name: 'description', content: this.peopleDetail.fields.description},
      {name: 'og:title', content: this.peopleDetail.fields.title},
      {name: 'og:description', content: this.peopleDetail.fields.description},
      {name: 'twitter:title', content: this.peopleDetail.fields.title},
      {name: 'twitter:description', content: this.peopleDetail.fields.description},
    ])
  }

}
