import { Component } from "@angular/core";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  standalone: true
})
export class NavBarComponent {
  title: string = "nav_bar"
}