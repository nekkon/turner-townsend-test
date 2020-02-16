import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/featured-playlists/featured-playlists.module').then(
        m => m.FeaturedPlaylistsViewModule
      )
  }
];
