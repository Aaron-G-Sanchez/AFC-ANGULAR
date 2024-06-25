import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Player } from '../types/Player'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  baseUrl: string = 'http://localhost:3001/api/v1/players'

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.baseUrl)
  }
}
