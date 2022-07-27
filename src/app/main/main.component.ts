import { Component, OnInit } from '@angular/core';
import {Entry} from "contentful";
import {ContentfulService} from "../services/contentful.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  items : Observable<Entry<any>[]>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.items = this.contentful.getEntries();
  }

}
