import {Directive, ElementRef, Input} from '@angular/core';
import {ContentfulService} from "./services/contentful.service";
import {SeoService} from "./services/seo.service";

@Directive({
  selector: 'img[imageLoader]'
})
export class ImageLoaderDirective {

  @Input('imageLoader') imageId:string;

  constructor(private contentful: ContentfulService, private elemRef: ElementRef<HTMLImageElement>, private seoService:SeoService) { }

  ngOnInit() {
    this.contentful.getAssetsById(this.imageId).subscribe(assets => {
      this.elemRef.nativeElement.src = assets.fields.file.url;
      this.elemRef.nativeElement.alt = assets.fields.title;

      this.seoService.setMetas([
        {name: 'og:image', content: assets.fields.file.url},
        {name: 'twitter:image', content: assets.fields.file.url},
      ])
    });
  }

}
