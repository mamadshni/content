import { Injectable } from '@angular/core';
import {Meta, MetaDefinition, Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private readonly AppTitle = 'Contentful';
  private readonly AppDescription = 'Contentful with Angular Universal';


  constructor(private meta: Meta, private title: Title) { }

  public initDefaultMetaTags() {
    this.title.setTitle(this.AppTitle);

    this.meta.addTags([
      {name: 'description', content: this.AppDescription},
      {name: 'robots', content: 'index,follow'},
      {name: 'author', content: 'mo'},
      {name: 'rating', content: 'safe for kids'},
      {httpEquiv: 'content-language', content: 'en-us'},
    ]);
  }

  public setTitle(title: string) {
    this.title.setTitle(title);
  }

  public setMeta(metaTag: MetaDefinition) {
    this.meta.updateTag(metaTag)
  }

  public setMetas(metaTags: MetaDefinition[]) {
    metaTags.forEach(metaTag => this.setMeta(metaTag))
  }
}
