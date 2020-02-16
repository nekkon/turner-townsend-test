import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/playlists/playlists.module').then(
        m => m.PlaylistsViewModule
      )
  }
];
