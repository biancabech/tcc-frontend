import { Component } from '@angular/core';
import { faUser, faLinkSlash, faChartBar, faSquareBinary, faHandshake } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  faChartBar = faChartBar;
  faUser = faUser;
  faLinkSlash = faLinkSlash;
  faSquareBinary = faSquareBinary;
  faHandshake = faHandshake;
}
