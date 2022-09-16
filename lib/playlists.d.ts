import { ISpotifyProfile, ISpotifyTopTracksResponse } from ".";
export interface ISpotifyPlaylist {
    id: string;
    href: string;
    collaborative: boolean;
    description: string;
    followers: {
        href: string;
        total: number;
    };
    owner: ISpotifyProfile;
    tracks: ISpotifyTopTracksResponse[];
}
