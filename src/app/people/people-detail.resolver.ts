import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Entry} from "contentful";
import {People} from "../model/people.model";
import {ContentfulService} from "../services/contentful.service";
import {RouteParam} from "../model/routes.model";

@Injectable({ providedIn: 'root' })
export class PeopleDetailResolver implements Resolve<Entry<People>> {
  constructor(private contentful:ContentfulService) {}

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<Entry<People>> {
    console.log(_route.paramMap.get(RouteParam.SelectedPeople));
    return this.contentful.getEntryById<People>(_route.paramMap.get(RouteParam.SelectedPeople))
  }
}
