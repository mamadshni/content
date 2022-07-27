import { Injectable } from '@angular/core';
import {Asset, Entry, EntryCollection} from 'contentful';
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {News} from "../model/news.model";
import {People} from "../model/people.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ContentfulService {

  CONTENTFUL_URL = `${environment.contentful.baseUrl}/spaces/${environment.contentful.spaceId}/environments/${environment.contentful.environmentId}`;

  constructor(private http: HttpClient) { }

  public getNews(): Observable<Entry<News>[]> {

    return this.getEntriesCollectionByContentType<News>('new')
      .pipe(
        map(response => response.items)
      )
  }

  public getPeoples(): Observable<Entry<People>[]> {

    return this.getEntriesCollectionByContentType<People>('people')
      .pipe(
        map(response => response.items)
      )
  }


  public getEntriesCollectionByContentType<T>(contentType: string) :Observable<EntryCollection<T>> {

    return this.http.get<EntryCollection<T>>(`${this.CONTENTFUL_URL}/entries?content_type=${contentType}`)
  }


  public getEntryById<T>(itemId: string) :Observable<Entry<T>> {
    return this.http.get<Entry<T>>(`${this.CONTENTFUL_URL}/entries/${itemId}`)
  }


  public getAssetsById(itemId: string) :Observable<Asset> {
    return this.http.get<Asset>(`${this.CONTENTFUL_URL}/assets/${itemId}`)
  }


  public getEntries() :Observable<Entry<any>[]> {

    return this.http.get<EntryCollection<any>>(`${this.CONTENTFUL_URL}/entries`)
      .pipe(
        map( response => response.items)
      )
  }
}
