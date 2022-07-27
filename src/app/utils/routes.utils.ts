import {ActivatedRouteSnapshot} from "@angular/router";
import {NewsId} from "../model/types.model";
import {RouteParam} from "../model/routes.model";

// ------------------------------
//       Activated Route
// ------------------------------

export function getNewsIdFromRoute(route: ActivatedRouteSnapshot): NewsId {
  return route.paramMap.get(RouteParam.SelectedNews);
}
