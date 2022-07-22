import { Injectable } from '@angular/core';
import {Entry, EntryCollection} from 'contentful';
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {News} from "../news/news.model";
import {People} from "../people/people.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ContentfulService {

  CONTENTFUL_URL = `${environment.contentful.baseUrl}/spaces/${environment.contentful.spaceId}/environments/${environment.contentful.environmentId}`;

  constructor(private http: HttpClient) { }

  public getNews(): Observable<Entry<News>[]> {

    return this.http.get<EntryCollection<People>>(`${this.CONTENTFUL_URL}/entries?content_type=new`)
      .pipe(
        map(response => response.items)
      )
  }

  public getPeoples(): Observable<Entry<People>[]> {

    return this.http.get<EntryCollection<People>>(`${this.CONTENTFUL_URL}/entries?content_type=people`)
      .pipe(
        map(response => response.items)
      )
  }

  public getAll() :Observable<Entry<any>[]> {

    return this.http.get<EntryCollection<any>>(`${this.CONTENTFUL_URL}/entries`)
      .pipe(
        map(response => response.items)
    )
  }
}
