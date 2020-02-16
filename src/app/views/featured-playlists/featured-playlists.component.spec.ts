import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedPlaylistsViewModule } from './featured-playlists.module';
import { FeaturedPlaylistsComponent } from './featured-playlists.component';

describe('PlaylistsComponent', () => {
  let component: FeaturedPlaylistsComponent;
  let fixture: ComponentFixture<FeaturedPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturedPlaylistsViewModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
