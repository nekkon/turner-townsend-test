import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './views/playlists/playlists.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistComponent } from 'src/shared/components/presentational/playlist/playlist.component';
import { NavigationComponent } from 'src/shared/components/containers/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    PlaylistComponent,
    NavigationComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
