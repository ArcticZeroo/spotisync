import ISpotifyCredentials from './ISpotifyCredentials';

export default interface IAccount {
    id: string;
    salt: string;
    spotifyCredentials: ISpotifyCredentials;
}