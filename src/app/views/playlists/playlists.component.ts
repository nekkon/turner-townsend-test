import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { PlaylistsService } from '@shared/services/playlists/playlists.service';
import {
  IFeaturedPlaylistsDto,
  IPlaylistDto
} from '@shared/services/playlists/playlists.interface';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

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
    private titleService: Title,
    private playlistsService: PlaylistsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.playlistsSubscription = this.playlistsService
      .getFeaturedPlaylists()
      .subscribe((response: IFeaturedPlaylistsDto) => {
        const featuredPlaylists = response.featuredPlaylists;
        this.setTitle(featuredPlaylists.name);
        this.playlists = featuredPlaylists.content;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    if (this.playlistsSubscription) {
      this.playlistsSubscription.unsubscribe();
    }
  }

  setTitle(title: string) {
    this.title = title;
    this.titleService.setTitle(title);
  }
}
