import { Component, OnInit } from '@angular/core';
import {Entry} from "contentful";
import {ContentfulService} from "../../services/contentful.service";
import {Observable} from "rxjs";
import {News} from "../news.model";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  // @ts-ignore
  news : Observable<Entry<News>[]>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.news = this.contentful.getNews()
  }

}
