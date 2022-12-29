import { Length, IsNotEmpty, IsNumberString } from "class-validator";
export class Transaction {
    tranferTypeId: number;
    value: number;
    transactionExternalId: string;
    accountExternalIdDebit: string;
    accountExternalIdCredit: string;
    status?: string;
    extra_data?: string;
}