import { TestBed } from '@angular/core/testing';
import { PlaylistsService } from './playlists.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

describe('PlaylistsService', () => {
  let service: PlaylistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule]
    });
    service = TestBed.inject(PlaylistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request featured playlists', () => {
    spyOn(service.http, 'get').and.returnValue(
      of({ featuredPlaylists: { name: '', content: [] } })
    );

    service.getFeaturedPlaylists();

    expect(service.http.get).toHaveBeenCalledWith(service.featuredPlaylistsUrl);
  });
});
