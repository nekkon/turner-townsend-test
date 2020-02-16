export interface IPlaylistDto {
  id: string;
  kind: string;
  name: string;
  url: string;
  curator_name: string;
  artwork: string;
}

export interface IFeaturedPlaylistsDto {
  featuredPlaylists: {
    name: string;
    content: IPlaylistDto[];
  };
}
