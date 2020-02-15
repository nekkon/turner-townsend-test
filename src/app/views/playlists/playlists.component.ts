import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PlaylistsService } from 'src/shared/services/playlists/playlists.service';
import {
  IFeaturedPlaylistsDto,
  IPlaylistDto
} from 'src/shared/services/playlists/playlists.interface';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  title: string;
  playlists: IPlaylistDto[];

  constructor(
    private playlistsService: PlaylistsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.playlistsService
      .getFeaturedPlaylists()
      .subscribe((response: IFeaturedPlaylistsDto) => {
        const featuredPlaylists = response.featuredPlaylists;
        this.title = featuredPlaylists.name;
        this.playlists = featuredPlaylists.content;
        this.changeDetectorRef.detectChanges();
      });
  }
}
