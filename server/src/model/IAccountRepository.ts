import IAccount from './IAccount';

export default interface IAccountRepository {
    create(account: IAccount): Promise<void>;
    exists(account: IAccount): Promise<boolean>;
}