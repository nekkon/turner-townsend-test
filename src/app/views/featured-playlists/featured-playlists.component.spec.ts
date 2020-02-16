import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedPlaylistsViewModule } from './featured-playlists.module';
import { FeaturedPlaylistsComponent } from './featured-playlists.component';
import { CoreModule } from '@core/core.module';
import { of } from 'rxjs';

describe('FeaturedPlaylistsComponent', () => {
  let component: FeaturedPlaylistsComponent;
  let fixture: ComponentFixture<FeaturedPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, FeaturedPlaylistsViewModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPlaylistsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should set correct meta', () => {
    fixture.detectChanges();
    expect(component.meta.getTag('name="description"').content).toEqual(
      'Featured Playlists page'
    );
  });

  it('should set featured playlists and title', () => {
    const mockedFeaturedPlaylists = {
      featuredPlaylists: {
        name: 'Featured Playlists',
        content: [
          {
            id: 'pl.2b0e6e332fdf4b7a91164da3162127b5',
            kind: 'playlist',
            name: 'New Music Daily',
            url:
              // tslint:disable-next-line: max-line-length
              'https://music.apple.com/us/playlist/new-music-daily/pl.2b0e6e332fdf4b7a91164da3162127b5?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330',
            curator_name: 'Apple Music',
            artwork:
              'https://is5-ssl.mzstatic.com/image/thumb/Features124/v4/52/96/69/52966918-6774-213c-5625-f0f963a6b3a8/source/600x600cc.jpg'
          }
        ]
      }
    };
    spyOn(component.playlistsService, 'getFeaturedPlaylists').and.returnValue(
      of(mockedFeaturedPlaylists)
    );
    spyOn(component, 'setTitle').and.callThrough();

    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(component.setTitle).toHaveBeenCalled();
    expect(component.title).toEqual(
      mockedFeaturedPlaylists.featuredPlaylists.name
    );
    expect(component.playlists).toEqual(
      mockedFeaturedPlaylists.featuredPlaylists.content
    );
  });
});
