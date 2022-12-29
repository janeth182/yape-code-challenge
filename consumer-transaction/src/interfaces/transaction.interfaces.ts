import { Length, IsNotEmpty, IsNumberString } from "class-validator";
export class Transaction {
    transactionExternalId: string;
    tranferTypeId: number;
    value: number;
    accountExternalIdDebit:  string;
    accountExternalIdCredit: string;
    status: string;
    extraData: string;
}