import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Transaction } from '../interfaces/transaction.interfaces';

@Injectable()
export class TransactionPersistenceService {
    private readonly logger = new Logger(TransactionPersistenceService.name);
    constructor(private readonly prismaService: PrismaService) { }

    public async updateTransaction(transaction: Transaction){
        try {
            return await this.prismaService.transaction.update({
                where: { 
                    transaction_external_id: transaction.transactionExternalId
                },
                data:{
                    status: transaction.status,
                    extra_data: transaction.extraData,
                    update_at: new Date()
                }
            })
        } catch (error) {
            this.logger.log(error);
        }
    }

}