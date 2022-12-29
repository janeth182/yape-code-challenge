import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable()
export class TransactionPersistenceService {
    private readonly logger = new Logger(TransactionPersistenceService.name);
    constructor(private readonly prismaService: PrismaService) { }

    public async createTransaction(transaction: Transaction){
        try {
            return await this.prismaService.transaction.create({
                data:{
                    status: transaction.status,
                    transaction_external_id: transaction.transactionExternalId,
                    account_external_id_debit: transaction.accountExternalIdDebit,
                    account_external_id_credit: transaction.accountExternalIdCredit,
                    tranfer_type_id: transaction.tranferTypeId,
                    value: transaction.value
                }
            })
        } catch (error) {
            this.logger.log(error);
        }
    }

    public async updateTransaction(transaction: Transaction){
        try {
            return await this.prismaService.transaction.update({
                where: { 
                    transaction_external_id: transaction.transactionExternalId
                },
                data:{
                    status: transaction.status,
                    extra_data: transaction.extra_data,
                    update_at: new Date()
                }
            })
        } catch (error) {
            this.logger.log(error);
        }
    }

}