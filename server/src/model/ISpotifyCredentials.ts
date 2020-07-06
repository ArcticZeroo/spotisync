export default interface ISpotifyCredentials {
    accessToken: string;
    refreshToken: string;
    expireTime: Date;
    userId: string;
    scopes: Set<string>;
}