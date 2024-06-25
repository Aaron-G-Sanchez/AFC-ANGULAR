import { Component, OnInit } from '@angular/core'
import { HeaderComponent } from './components/header/header.component'
import { PlayerService } from '../shared/services/players.service'
import { Player } from '../shared/types/Player'

@Component({
  selector: 'site-overview',
  templateUrl: './site-overview.component.html',
  styleUrl: './site-overview.component.scss',
  imports: [HeaderComponent],
  standalone: true
})
export class SiteOverviewComponent implements OnInit {
  playerList: Player[] = []
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((data) => {
      console.log(data)
    })
  }
}
