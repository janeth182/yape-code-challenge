import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TransactionPersistenceService } from './transaction-persistence.service';

@Module({
    providers: [PrismaService, TransactionPersistenceService],
    exports:[PrismaService, TransactionPersistenceService]
})
export class PersistenceModule {}
