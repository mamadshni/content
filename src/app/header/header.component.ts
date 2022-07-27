import { Component } from '@angular/core';
import {Page} from "../model/routes.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public readonly Page = Page;
}
