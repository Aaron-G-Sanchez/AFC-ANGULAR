import { Component } from "@angular/core";

@Component({
  selector: 'site-overview',
  templateUrl: './site-overview.component.html',
  styleUrl: './site-overview.component.scss',
  standalone: true
})
export class SiteOverviewComponent {
  title: string ='home'
}