import { ISpotifyImage } from ".";
export interface ISpotifyTopArtistsResponse {
    items: ISpotifyArtist[];
    total: number;
    limit: number;
    offset: number;
    href: string;
    previous: string;
    next: string;
}
export interface ISpotifyArtist {
    external_urls: {
        spotify: string;
        [key: string]: string;
    };
    followers: {
        href: string;
        total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: ISpotifyImage[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}
export interface ISpotifyArtistTrim {
    name: string;
    type: string;
    uri: string;
}
