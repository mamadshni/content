import { Component } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerText = of(['test1','test2', 'test3']);

}
