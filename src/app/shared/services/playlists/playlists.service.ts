import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFeaturedPlaylistsDto } from './playlists.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  private readonly featuredPlaylistsUrl: string =
    'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json';

  constructor(private http: HttpClient) {}

  getFeaturedPlaylists(): Observable<IFeaturedPlaylistsDto> {
    return this.http.get<IFeaturedPlaylistsDto>(this.featuredPlaylistsUrl);
  }
}
