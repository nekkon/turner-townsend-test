import { Component, Input } from '@angular/core';
import { IPlaylistDto } from 'src/shared/services/playlists/playlists.interface';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {
  @Input() playlist: IPlaylistDto;
}
