import { Component } from "@angular/core";
import { HeaderComponent } from './components/header/header.component'

@Component({
  selector: 'site-overview',
  templateUrl: './site-overview.component.html',
  styleUrl: './site-overview.component.scss',
  imports: [HeaderComponent],
  standalone: true
})
export class SiteOverviewComponent {}