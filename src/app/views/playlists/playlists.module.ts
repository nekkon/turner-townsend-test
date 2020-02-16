import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistComponent } from 'src/shared/components/presentational/playlist/playlist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlaylistsComponent, PlaylistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlaylistsComponent
      }
    ])
  ]
})
export class PlaylistsViewModule {}
