import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { PlaylistsService } from 'src/shared/services/playlists/playlists.service';
import {
  IFeaturedPlaylistsDto,
  IPlaylistDto
} from 'src/shared/services/playlists/playlists.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit, OnDestroy {
  title: string;
  playlists: IPlaylistDto[];

  playlistsSubscription: Subscription;

  constructor(
    private playlistsService: PlaylistsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.playlistsSubscription = this.playlistsService
      .getFeaturedPlaylists()
      .subscribe((response: IFeaturedPlaylistsDto) => {
        const featuredPlaylists = response.featuredPlaylists;
        this.title = featuredPlaylists.name;
        this.playlists = featuredPlaylists.content;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    if (this.playlistsSubscription) {
      this.playlistsSubscription.unsubscribe();
    }
  }
}
