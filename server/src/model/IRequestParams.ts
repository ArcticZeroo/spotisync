import RequestMethod from '../enum/RequestMethod';

export default interface IRequestParams {
    method: RequestMethod;
    url: string;
}