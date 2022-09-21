import { ISpotifyProfile, ISpotifyTrack } from ".";
export interface ISpotifyPlaylist {
    id: string;
    href: string;
    collaborative: boolean;
    description: string;
    followers: {
        href: string;
        total: number;
    };
    name: string;
    owner: ISpotifyProfile;
    tracks: {
        href: string;
        total: number;
    };
}
export interface ISpotifyPlaylistTrack {
    added_at: string;
    track: ISpotifyTrack;
}
