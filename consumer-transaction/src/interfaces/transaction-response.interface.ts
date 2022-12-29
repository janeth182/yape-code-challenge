import { Length, IsNotEmpty, IsNumberString } from "class-validator";

class type {
    name: string;
}

class status {
    name: string;
}

export class TransactionResponse {
    transactionExternalId: string;
    transactionType: type;
    transactionStatus: status;
    value: number;
    createdAt: Date;
}



