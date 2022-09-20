import { ISpotifyPaginatedResponse, ISpotifyProfile, ISpotifyTrack } from "."

export interface ISpotifyPlaylist {
  id: string
  href: string
  collaborative: boolean
  description: string
  followers: {
    href: string
    total: number
  }
  name: string
  owner: ISpotifyProfile
  tracks: ISpotifyPaginatedResponse<ISpotifyPlaylistTrack>[]
}
export interface ISpotifyPlaylistTrack {
  added_at: string
  track: ISpotifyTrack
}