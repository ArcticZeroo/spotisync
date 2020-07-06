import IRequestParams from './IRequestParams';

export default interface IRequestClient {
    request(params: IRequestParams): Promise<string>;
}