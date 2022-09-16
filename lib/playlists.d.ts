import { ISpotifyPaginatedResponse, ISpotifyProfile, ISpotifyTrack } from ".";
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
    tracks: ISpotifyPaginatedResponse<ISpotifyTrack>[];
}
