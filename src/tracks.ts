import { ISpotifyArtistTrim, ISpotifyImage } from "."

export interface ISpotifyTrack {
  album: ISpotifyAlbum
  artists: ISpotifyArtistTrim[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: { [key: string]: string }
  external_urls: {
    spotify: string
    [key: string]: string
  }
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}
export interface ISpotifyAlbum {
  album_type: string
  artists: ISpotifyArtistTrim[]
  images: ISpotifyImage[]
  name: string
  release_date: string
}