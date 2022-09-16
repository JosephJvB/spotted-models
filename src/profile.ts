export interface ISpotifyImage {
  height?: number
  url: string
  width?: number
}
export interface ISpotifyTokenResponse {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  scope: string
}

export interface ISpotifyRefreshResponse {
  access_token: string
  token_type: string
  scope: string
  expires_in: number
}

export interface ISpotifyMeResponse {
  country: string
  display_name: string
  email: string
  explicit_content: {
    filter_enabled: boolean
    filter_locked: boolean
  }
  external_urls: {
    spotify: string
  }
  followers: {
    href?: string
    total: number
  }
  href: string
  id: string
  images: ISpotifyImage[]
  product: string
  type: string
  uri: string
}