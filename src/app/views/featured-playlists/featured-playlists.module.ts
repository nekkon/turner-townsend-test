import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedPlaylistsComponent } from './featured-playlists.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PlaylistModule } from '@shared/components/presentational/playlist/playlist.module';

@NgModule({
  declarations: [FeaturedPlaylistsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PlaylistModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeaturedPlaylistsComponent
      }
    ])
  ]
})
export class FeaturedPlaylistsViewModule {}
