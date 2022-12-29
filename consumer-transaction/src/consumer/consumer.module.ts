import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';
import { TransactionPersistenceService } from '../persistence/transaction-persistence.service';
import { PrismaService } from '../persistence/prisma.service';

@Module({
  controllers: [ConsumerController],
  providers: [ConsumerService, TransactionPersistenceService, PrismaService],
})
export class ConsumerModule {}
