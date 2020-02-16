import { TestBed } from '@angular/core/testing';
import { PlaylistsService } from './playlists.service';
import { SharedModule } from '@shared/shared.module';

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
});
