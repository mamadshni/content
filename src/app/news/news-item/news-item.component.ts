import { Component, Input } from '@angular/core';
import {Entry} from "contentful";
import {News} from "../../model/news.model";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {


  @Input() newsDetail: Entry<News>;

  constructor() {}

}
