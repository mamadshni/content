import {Component, OnInit} from '@angular/core';
import {Entry} from "contentful";
import {Observable} from "rxjs";
import {News} from "../../model/news.model";
import {ActivatedRoute} from "@angular/router";
import {ContentfulService} from "../../services/contentful.service";
import {RouteParam} from "../../model/routes.model";

@Component({
  selector: 'app-news-item-container',
  templateUrl: './news-item-container.component.html',
  styleUrls: ['./news-item-container.component.scss']
})
export class NewsItemContainerComponent implements OnInit{

  public newsDetail$: Observable<Entry<News>>;

  constructor(private route: ActivatedRoute,private contentful: ContentfulService) {}

  ngOnInit() {
    this.newsDetail$ = this.contentful.getEntryById<News>(this.route.snapshot.paramMap.get(RouteParam.SelectedNews))
  }

}
