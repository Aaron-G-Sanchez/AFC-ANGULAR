import { Component } from '@angular/core'
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component'

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NavBarComponent],
  standalone: true
})
export class HeaderComponent {}
