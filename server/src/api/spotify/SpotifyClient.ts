import { inject, injectable } from 'tsyringe';
import IRequestClient from '../../model/IRequestClient';
import ISpotifyCredentials from '../../model/ISpotifyCredentials';

@injectable()
export default class SpotifyClient {
    constructor(
        @inject('IRequestClient') private  _requestClient: IRequestClient
    ) {
    }

    async exchangeTemporaryCodeForCredentials(authorizationCode: string): Promise<ISpotifyCredentials> {
        
    }
}