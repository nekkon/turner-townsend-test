import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { PlaylistsService } from '@shared/services/playlists/playlists.service';
import {
  IFeaturedPlaylistsDto,
  IPlaylistDto
} from '@shared/services/playlists/playlists.interface';
import { Subscription } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-featured-playlists',
  templateUrl: './featured-playlists.component.html',
  styleUrls: ['./featured-playlists.component.scss']
})
export class FeaturedPlaylistsComponent implements OnInit, OnDestroy {
  title: string;
  playlists: IPlaylistDto[];

  playlistsSubscription: Subscription;

  constructor(
    public meta: Meta,
    private titleService: Title,
    public playlistsService: PlaylistsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.meta.updateTag({
      name: 'description',
      content: 'Featured Playlists page'
    });
  }

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
