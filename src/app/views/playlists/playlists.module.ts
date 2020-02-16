import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PlaylistModule } from '@shared/components/presentational/playlist/playlist.module';

@NgModule({
  declarations: [PlaylistsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PlaylistModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlaylistsComponent
      }
    ])
  ]
})
export class PlaylistsViewModule {}
