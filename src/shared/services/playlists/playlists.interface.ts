export interface IPlaylistDto {
  id: string;
  kind: string;
  name: string;
  url: string;
  curator_name: string;
  artwork: string;
}

export interface IPlaylistsDto {
  name: string;
  content: IPlaylistDto[];
}
